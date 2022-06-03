const express = require("express");

const app = express();
const databaseTest = require("./src/server/database");
const router = require("./src/interfaces/routes");
const port = process.env.PORT || 3000;

router(app);

app.listen(port, () => {
  console.log("Servidor esta avanzando");
  databaseTest();
});
