const express = require("express");

const app = express();
const databaseTest = require("./src/server/database");
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Hola desde el backend");
});

app.listen(port, () => {
  console.log("Servidor esta avanzando");
  databaseTest();
});
