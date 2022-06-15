const UsuarioRepositorio = require('../../../../src/infraestructura/orm/sequelize/repositorios/usuario.repositorio');
const CreateUserUseCase = require('../../../../src/app/casos-de-uso/Usuario/creacion-de-usuario.usecase');
const ListUsersUseCase = require('../../../../src/app/casos-de-uso/Usuario/listado-de-usuario.usecase');
const Usuario = require('../../../../src/app/dominio/Usuario/Usuario');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'))
const InvalidUserError = require('../../../../src/app/dominio/Usuario/InvalidUser.error');
describe('usuarios', () => {
  describe('CRUD USUARIOS', () => {
    const usuarioRepositorio = new UsuarioRepositorio();
    it('should return an instance of Usuario after execute createUserUseCase', async () => {      
      const usuarioToCreate = {
        firstName: 'Juan',
        lastName: 'Perez',
        email: 'juan.perez@mail.com',
      }
      const useCase = new CreateUserUseCase({ usuarioRepositorio });
      const usuarioCreated = await useCase.execute(usuarioToCreate);
      expect(usuarioCreated).to.be.an.instanceOf(Usuario);
    });
    it('should throw an error if firstName is empty or null', async () => {
      const usuarioToCreate = {
        firstName: null,
        lastName: 'Perez',
        email: 'juan.perez@mail.com',
      };
      const useCase = new CreateUserUseCase({ usuarioRepositorio });
      await expect(useCase.execute(usuarioToCreate)).to.be.rejectedWith(InvalidUserError);
      // let newUser;
      // try {
      //   newUser = await useCase.execute(usuarioToCreate);
      // } catch (error) {
      //   expect(error).to.be.an.(new InvalidUserError('firstName is required'));
      // }
      // expect(newUser).to.be.undefined;
    });
    // it('should throw an error if the email is already registered', async () => {});
    /** Test to list all users  */
    it('should return an array of Usuario after execute listUsersUseCase', async () => {
      const useCase = new ListUsersUseCase({usuarioRepositorio});
      const usuarios = await useCase.execute();
      expect(usuarios).to.be.an('array');
      usuarios.forEach(usuario => {
        expect(usuario).to.be.an.instanceOf(Usuario);
      });
    });
  });
});