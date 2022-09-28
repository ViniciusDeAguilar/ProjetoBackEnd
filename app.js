const express = require('express');

const app = express();

// Rotas
const indexRouter = require('./src/routes/index')
const fichasRouter = require('./src/routes/ficha');
const jogadoresRouter = require('./src/routes/jogador');
const npcRouter = require('./src/routes/npc');

// MiddleWares
app.use(express.json(),
    indexRouter,
    fichasRouter,
    jogadoresRouter,
    npcRouter);

module.exports = app;