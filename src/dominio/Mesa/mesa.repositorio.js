const GeneralRepositorio = require("../../infraestructura/orm/sequelize/repositorios/general.repositorio");

class MesaRepositorio extends GeneralRepositorio {
  constructor() {
    super("Mesa");
  }

  obtenerMesasDisponibles({ cantPersonas }) {
    return this.model.findAll({
      where: {
        estado: true,
        // cantPersonas,
      },
    });
  }
}

module.exports = MesaRepositorio;
