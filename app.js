// Imports
const express = require('express');
const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swaggerDoc.json');

app.listen(3000, ()=> console.log("API está online na porta 3000"));

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

app.use(
    '/api-docs', 
    swaggerUI.serve, 
    swaggerUI.setup(swaggerDoc));

module.exports = app;