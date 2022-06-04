const GeneralRepositorio = require("./general.repositorio");

class UsuarioRepositorio extends GeneralRepositorio{
  constructor() {
    super('User');    
  }
}

module.exports = UsuarioRepositorio;
