const sequelize = require("../../models/index").sequelize;

module.exports = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log("Error al conectar con la base de datos");
    console.log(error);
  }
};
