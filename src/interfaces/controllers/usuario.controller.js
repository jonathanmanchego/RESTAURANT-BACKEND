const CreacionDeUsuarioUseCase = require("../../app/casos-de-uso/Usuario/creacion-de-usuario.usecase");
const ListadoDeUsuarioUseCase = require("../../app/casos-de-uso/Usuario/listado-de-usuario.usecase");
const UsuarioRepositorio = require("../../infraestructura/orm/sequelize/repositorios/usuario.repositorio");


const usuarioRepositorio = new UsuarioRepositorio();
const createUsuario = async (req, res) => {
  const useCase = new CreacionDeUsuarioUseCase({ usuarioRepositorio });
  const newUserCreated = await useCase.execute(req.body);
  res.json(newUserCreated);
};

const indexUsuario = async (req, res) => {
  const useCase = new ListadoDeUsuarioUseCase({usuarioRepositorio});
  const result = await useCase.execute();
  res.json(result);
}
module.exports = {
  createUsuario,
  indexUsuario
};
