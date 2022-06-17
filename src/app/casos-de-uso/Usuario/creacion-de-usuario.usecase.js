const InvalidUserError = require("../../dominio/Usuario/InvalidUser.error");
const Usuario = require("../../dominio/Usuario/Usuario");

class CreacionDeUsuarioUseCase {
  constructor({ usuarioRepositorio }) {
    this.usuarioRepositorio = usuarioRepositorio;
  }

  async execute({ id, firstName, lastName, email, createdAt, updatedAt }) {
    this.validate({ firstName, lastName, email });
    const newUsuario = new Usuario({
      firstName,
      lastName,
      email,
      id,
      createdAt,
      updatedAt,
    });
    const userCreated = await this.usuarioRepositorio.create(newUsuario);
    return new Usuario(userCreated);
  }

  validate({ firstName, lastName, email }) {
    if (!firstName) {
      throw new InvalidUserError("firstName is required");
    }
    if (!lastName) {
      throw new InvalidUserError("lastName is required");
    }
    if (!email) {
      throw new InvalidUserError("email is required");
    }
  }
}

module.exports = CreacionDeUsuarioUseCase;
