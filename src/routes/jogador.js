const express = require('express');
const jogadoresController = require('../controllers/jogadoresController')

const router = express.Router();

router.get('/jogador', jogadoresController.listarJogadores);
router.get('/jogador/:id', jogadoresController.consultarJogadorId);
router.put('/jogador/:id', jogadoresController.atualizarJogador);


module.exports = router;