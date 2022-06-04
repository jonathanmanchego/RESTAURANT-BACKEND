const Usuario = require("../../dominio/Usuario/Usuario");

class ListadoDeUsuarioUseCase {
  constructor({ usuarioRepositorio }) {
    this.usuarioRepositorio = usuarioRepositorio;
  }

  async execute() {
    // TODO validaciones
    return await this.usuarioRepositorio.getAll();
  }
}

module.exports = ListadoDeUsuarioUseCase;
