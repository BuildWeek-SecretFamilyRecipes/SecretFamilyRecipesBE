const express = require('express');
const authRouter = require('./auth/auth-router.js');
const recipesRouter = require('./recipes/recipes-router.js');


const server = express();

server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/recipes', recipesRouter);


module.exports = server;