const { createUsuario, indexUsuario } = require("../../../controllers/usuario.controller");

const router = require("express").Router();

router.route('/').get(indexUsuario)
.post(createUsuario);
module.exports = router;
