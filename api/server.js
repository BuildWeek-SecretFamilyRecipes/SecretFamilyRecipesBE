const express = require('express');
const authRouter = require('./auth/auth-router.js');
const recipesRouter = require('./recipes/recipes-router.js');
const authenticate = require('./auth/auth-middleware.js');


const server = express();

server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/recipes', recipesRouter);


module.exports = server;