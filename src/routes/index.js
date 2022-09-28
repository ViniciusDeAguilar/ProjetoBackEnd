const express = require('express');
const indexController = require('../controllers/indexController')

const router = express();

router.get('/', indexController.mensagem);

module.exports = router;