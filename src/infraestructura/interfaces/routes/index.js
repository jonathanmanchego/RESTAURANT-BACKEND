const apiRoutes = require("./api");
module.exports = app => {
  app.use("/api", apiRoutes);
  app.get("/health-check", (request, response) => {
    response.json({ status: "OK" });
  });
  app.get("/", (request, response) => {
    response.send("Hola desde el backend");
  });
};
