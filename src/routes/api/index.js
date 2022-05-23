const router = require("express").Router();
const usuariosRoutes = require("./usuarios/usuarios.route");

router.use("/usuarios", usuariosRoutes);

module.exports = router;
