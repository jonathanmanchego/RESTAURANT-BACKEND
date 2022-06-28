const { createUsuario, indexUsuario, deleteUsuario } = require("../../../controllers/usuario.controller");

const router = require("express").Router();

router.route('/').get(indexUsuario)
.post(createUsuario);

router.route('/:id').delete(deleteUsuario);
module.exports = router;
