const GeneralRepositorio = require("../../infraestructura/orm/sequelize/repositorios/general.repositorio");

class UsuarioRepositorio extends GeneralRepositorio {
  constructor() {
    super("User");
  }
}

module.exports = UsuarioRepositorio;
