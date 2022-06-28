const General = require("../General");

class Mesa extends General {
  constructor({ numero, id, estado, createdAt, updatedAt }) {
    super({
      id,
      createdAt,
      updatedAt,
    });
    this.numero = numero;
    this.estado = estado;
  }
}

module.exports = Mesa;
