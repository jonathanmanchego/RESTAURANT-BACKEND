const CreacionDeUsuarioUseCase = require("../../../app/casos-de-uso/Usuario/creacion-de-usuario.usecase");
const ListadoDeUsuarioUseCase = require("../../../app/casos-de-uso/Usuario/listado-de-usuario.usecase");
const DeleteUsuarioUseCase = require("../../../app/casos-de-uso/Usuario/eliminacion-de-usuario.usecase");
const UsuarioRepositorio = require("../../../dominio/Usuario/usuario.repositorio");

const usuarioRepositorio = new UsuarioRepositorio();
const createUsuario = async(req, res) => {
  const useCase = new CreacionDeUsuarioUseCase({ usuarioRepositorio });
  const newUserCreated = await useCase.execute(req.body);
  res.json(newUserCreated);
};

const indexUsuario = async(req, res) => {
  const useCase = new ListadoDeUsuarioUseCase({ usuarioRepositorio });
  const result = await useCase.execute();
  res.json(result);
};

const deleteUsuario = async(req, res) => {
  const useCase = new DeleteUsuarioUseCase({ usuarioRepositorio });
  const result = await useCase.execute(req.params.id);
  res.json(result);
};
module.exports = {
  createUsuario,
  indexUsuario,
  deleteUsuario,
};
