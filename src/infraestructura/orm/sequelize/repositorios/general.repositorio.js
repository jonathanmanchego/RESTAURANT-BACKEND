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

  async getById(id) {
    return await this.model.findByPk(id);
  }

  async delete(id) {
    return await this.model.destroy({ where: { id } });
  }
}

module.exports = GeneralRepositorio;
