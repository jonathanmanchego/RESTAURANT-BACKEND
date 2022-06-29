const chai = require("chai");
const SolicitarMesaDisponibleUseCase = require("../../../../src/app/casos-de-uso/Ventas/solicitar-mesa-disponible.usecase");
const Mesa = require("../../../../src/dominio/Mesa/mesa");
const MesaRepositorio = require("../../../../src/dominio/Mesa/mesa.repositorio");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

// solicitar disponibilidad de mesa
describe("solicitar_mesa use case", () => {
  const mesaRepositorio = new MesaRepositorio();
  const solicitarMesaUseCase = new SolicitarMesaDisponibleUseCase({
    mesaRepositorio,
  });
  it("should return a mesa disponible", async() => {
    const mesaRequisitos = {
      cantPersonas: 2,
      restauranteId: "1",
    };
    const mesa = await solicitarMesaUseCase.execute(mesaRequisitos);
    expect(mesa).to.be.an.instanceOf(Mesa);
  });
  it("should throw \"No hay mesas disponibles\"", async() => {
    const mesaRequisitos = {
      cantPersonas: 10,
      restauranteId: "1",
    };
    await expect(
      solicitarMesaUseCase.execute(mesaRequisitos)
    ).to.be.rejectedWith("No hay mesas disponibles");
  });
});
