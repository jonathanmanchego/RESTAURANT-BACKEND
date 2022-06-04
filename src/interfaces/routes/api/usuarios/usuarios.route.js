const { createUsuario, indexUsuario } = require("../../../controllers/usuario.controller");

const router = require("express").Router();

router.get("/", indexUsuario);
router.post("/", createUsuario);
module.exports = router;
