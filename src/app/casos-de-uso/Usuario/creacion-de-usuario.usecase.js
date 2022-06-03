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
    const newUserCreated = await this.usuarioRepositorio.create(newUsuario);
    return newUserCreated;
  }
}

module.exports = CreacionDeUsuarioUseCase;
