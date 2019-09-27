const express = require('express');
const authenticate = require('./auth/auth-middleware.js');
const cors = require('cors');
const helmet = require('helmet')

const authRouter = require('./auth/auth-router.js');
const recipesRouter = require('./recipes/recipes-router.js');
const usersRouter = require('./users/users-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

const whitelist = ['http://localhost:3000', 'https://secretfamilyrecipesfe.tsbiswell.now.sh'];
const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000'
    // origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //       return callback(null, true)
    //     } else {
    //       return callback(new Error('Not allowed by CORS'))
    //     }
    // }
};
server.use(cors(corsOptions));

server.use('/api/auth', authRouter);
server.use('/api', authenticate, recipesRouter);
server.use('/api/users', usersRouter);


module.exports = server;