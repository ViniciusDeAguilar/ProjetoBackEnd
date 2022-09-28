const express = require('express');
const fichaController = require('../controllers/fichasController')

const router = express.Router();

router.get('/ficha', fichaController.listarFichas);
router.get('/ficha/:id', fichaController.consultarFichaId);
router.put('/ficha/:id', fichaController.atualizarFicha);


module.exports = router;