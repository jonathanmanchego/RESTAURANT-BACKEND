const sequelize = require("../../../../../models");

class UsuarioRepositorio {
  constructor(model) {
    this.model = sequelize[model];
  }

  async create(usuario) {
    return await this.model.create(usuario);
  }
}

module.exports = UsuarioRepositorio;
