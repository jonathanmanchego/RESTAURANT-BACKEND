const Usuario = require("../../dominio/Usuario/Usuario");

class CreacionDeUsuarioUseCase {
  constructor({ usuarioRepositorio }) {
    this.usuarioRepositorio = usuarioRepositorio;
  }

  async execute({ id, firstName, lastName, email, createdAt, updatedAt }) {
    // TODO validaciones
    const newUsuario = new Usuario({
      firstName,
      lastName,
      email,
      id,
      createdAt,
      updatedAt,
    });
    return await this.usuarioRepositorio.create(newUsuario);
  }
}

module.exports = CreacionDeUsuarioUseCase;
