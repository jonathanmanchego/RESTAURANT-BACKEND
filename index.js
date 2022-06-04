const express = require("express");
const databaseTest = require("./src/server/database");
const router = require("./src/interfaces/routes");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());
router(app);

app.listen(port, () => {
  console.log("Servidor esta avanzando");
  databaseTest();
});
