const sequelize = require("../../../../../models");

class GeneralRepositorio {
  constructor(modelName) {
    this.model = sequelize[modelName];
  }
  async getAll() {
    return await this.model.findAll();
  }

  async create(data) {
    return await this.model.create(data);
  }
}

module.exports = GeneralRepositorio;