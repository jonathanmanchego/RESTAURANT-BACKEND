const apiRoutes = require("./api");
module.exports = (app) => {
  app.use("/api", apiRoutes);
  app.get("/", (request, response) => {
    response.send("Hola desde el backend");
  });
};
