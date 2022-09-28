const express = require('express');
const npcController = require('../controllers/npcController.js')

const router = express.Router();

router.get('/npc', npcController.listarNpcs);
router.get('/npc/:id', npcController.consultarNpcId);
router.put('/npc/:id', npcController.atualizarNpc);


module.exports = router;