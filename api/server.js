const express = require('express');
const authenticate = require('./auth/auth-middleware.js');

const authRouter = require('./auth/auth-router.js');
const recipesRouter = require('./recipes/recipes-router.js');
const usersRouter = require('./users/users-router.js');

const server = express();

server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api', authenticate, recipesRouter);
server.use('/api/users', usersRouter);


module.exports = server;