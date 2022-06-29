const GeneralRepositorio = require("../../infraestructura/orm/sequelize/repositorios/general.repositorio");

class MesaRepositorio extends GeneralRepositorio {
  constructor() {
    super("Mesa");
  }

  obtenerMesasDisponibles({ cantPersonas, restauranteId }) {
    return this.model.findAll({
      where: {
        estado: true,
        restauranteId,
        // cantPersonas,
      },
    });
  }
}

module.exports = MesaRepositorio;
