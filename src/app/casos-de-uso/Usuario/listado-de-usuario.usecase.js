const Usuario = require("../../dominio/Usuario/Usuario");

class ListadoDeUsuarioUseCase {
  constructor({ usuarioRepositorio }) {
    this.usuarioRepositorio = usuarioRepositorio;
  }

  async execute() {
    // TODO validaciones
    const usuariosCreateds = await this.usuarioRepositorio.getAll();
    return usuariosCreateds.map(usuarioCreated => (new Usuario(usuarioCreated)));
  }
}

module.exports = ListadoDeUsuarioUseCase;
