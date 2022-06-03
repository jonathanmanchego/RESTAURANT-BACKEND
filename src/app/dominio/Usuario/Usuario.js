const General = require("../General");

class Usuario extends General {
  constructor({ firstName, lastName, email, id, createdAt, updatedAt }) {
    super({
      id,
      createdAt,
      updatedAt,
    });
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

module.exports = Usuario;
