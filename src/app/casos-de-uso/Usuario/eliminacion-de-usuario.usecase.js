const InvalidUserError = require("../../dominio/Usuario/InvalidUser.error");
const Usuario = require("../../dominio/Usuario/Usuario");
class EliminacionDeUsuario {
  constructor({ usuarioRepositorio }) {
    this.usuarioRepositorio = usuarioRepositorio;
  }

  async execute(id) {
    const usuario = await this.usuarioRepositorio.getById(id);
    this.validate(usuario);
    await this.usuarioRepositorio.delete(id);
    return new Usuario(usuario);
  }

  validate(usuario) {
    if (!usuario) {
      throw new InvalidUserError("El usuario no existe");
    }
  }
}

module.exports = EliminacionDeUsuario;
