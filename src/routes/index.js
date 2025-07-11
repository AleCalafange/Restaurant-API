const express = require('express');
const router = express.Router();

router.use('/clientes', require('./clientes'));
router.use('/pratos', require('./pratos'));
router.use('/pedidos', require('./pedidos'));
router.use('/relatorios', require('./relatorios'));


module.exports = router;
