const CreacionDeUsuarioUseCase = require("../../app/casos-de-uso/Usuario/creacion-de-usuario.usecase");
const UsuarioRepositorio = require("../../infraestructura/orm/sequelize/repositorios/usuario.repositorio");

const createUsuario = async (req, res) => {
  const usuarioRepositorio = new UsuarioRepositorio();
  const useCase = new CreacionDeUsuarioUseCase({ usuarioRepositorio });
  const newUserCreated = await useCase.execute(req.body);
  res.json({ result: true, data: newUserCreated });
};

module.exports = {
  createUsuario,
};
