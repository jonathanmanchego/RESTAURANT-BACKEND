const UsuarioRepositorio = require("../../../../src/infraestructura/orm/sequelize/repositorios/usuario.repositorio");
const CreateUserUseCase = require("../../../../src/app/casos-de-uso/Usuario/creacion-de-usuario.usecase");
const ListUsersUseCase = require("../../../../src/app/casos-de-uso/Usuario/listado-de-usuario.usecase");
const DeleteUserUseCase = require("../../../../src/app/casos-de-uso/Usuario/eliminacion-de-usuario.usecase");
const Usuario = require("../../../../src/app/dominio/Usuario/Usuario");
const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));
const InvalidUserError = require("../../../../src/app/dominio/Usuario/InvalidUser.error");
describe("usuarios", () => {
  const {
    usuario: {
      usuario_sin_nombre,
      usuario_sin_apellido,
      usuario_sin_email,
      usuario_con_todos_los_campos,
    },
  } = require("../../../helpers/usuarios.request_body");
  describe("CRUD USUARIOS", () => {
    const usuarioRepositorio = new UsuarioRepositorio();
    let usuarioCreated = null;
    it("should throw an error if firstName is empty or null", async () => {
      const useCase = new CreateUserUseCase({ usuarioRepositorio });
      await expect(useCase.execute(usuario_sin_nombre)).to.be.rejectedWith(
        InvalidUserError,
        "",
        "firstName is required"
      );
    });
    it("should throw an error if lastName is empty or null", async () => {
      const useCase = new CreateUserUseCase({ usuarioRepositorio });
      await expect(useCase.execute(usuario_sin_apellido)).to.be.rejectedWith(
        InvalidUserError,
        "",
        "lastName is required"
      );
    });
    it("should throw an error if email is empty or null", async () => {
      const useCase = new CreateUserUseCase({ usuarioRepositorio });
      await expect(useCase.execute(usuario_sin_email)).to.be.rejectedWith(
        InvalidUserError,
        "",
        "email is required"
      );
    });
    it("should return an instance of Usuario after execute createUserUseCase", async () => {
      const useCase = new CreateUserUseCase({ usuarioRepositorio });
      usuarioCreated = await useCase.execute(usuario_con_todos_los_campos);
      expect(usuarioCreated).to.be.an.instanceOf(Usuario);
    });
    it("should return an array of Usuario after execute listUsersUseCase", async () => {
      const useCase = new ListUsersUseCase({ usuarioRepositorio });
      const usuarios = await useCase.execute();
      expect(usuarios).to.be.an("array");
      usuarios.forEach(usuario => {
        expect(usuario).to.be.an.instanceOf(Usuario);
      });
      expect(
        usuarios.find(
          usuario => usuario.email === usuario_con_todos_los_campos.email
        )
      ).to.be.an.instanceOf(Usuario);
    });
    it("should delete an instance of Usuario after execute deleteUserUseCase by ID", async () => {
      const useCase = new DeleteUserUseCase({ usuarioRepositorio });
      const usuarioDeleted = await useCase.execute(usuarioCreated.id);
      const useCaseListado = new ListUsersUseCase({ usuarioRepositorio });
      const usuarios = await useCaseListado.execute();
      expect(usuarioDeleted).to.be.an.instanceOf(Usuario);
      expect(usuarios.find(usuario => usuario.id === usuarioDeleted.id)).to.be
        .undefined;
    });
  });
});
