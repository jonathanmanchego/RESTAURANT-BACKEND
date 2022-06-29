const Mesa = require("../../../dominio/Mesa/mesa");
const NotAvailableMesa = require("../../../dominio/Mesa/NotAvailableMesa.error");

class SolicitarMesaDisponibleUseCase {
  constructor({ mesaRepositorio }) {
    this.mesaRepositorio = mesaRepositorio;
  }

  async execute({ cantPersonas, restauranteId }) {
    const mesas = await this.mesaRepositorio.obtenerMesasDisponibles({
      cantPersonas,
      restauranteId,
    });
    if (mesas.length === 0) {
      throw new NotAvailableMesa("No hay mesas disponibles");
    }

    return new Mesa(mesas[0]);
  }
}

module.exports = SolicitarMesaDisponibleUseCase;
