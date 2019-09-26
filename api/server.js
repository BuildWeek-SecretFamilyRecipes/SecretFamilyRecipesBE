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
    origin: 'https://secretfamilyrecipesfe.tsbiswell.now.sh'
    // origin: function(origin, callback){
    //     if(!origin) return callback(null, true);
    //     if(allowedOrigins.indexOf(origin) === -1){
    //       const msg = 'The CORS policy for this site does not ' +
    //                 'allow access from the specified Origin.';
    //       return callback(new Error(msg), false);
    //     }
    //     return callback(null, true);
    // }
};
server.use(cors(corsOptions));

server.use('/api/auth', authRouter);
server.use('/api', authenticate, recipesRouter);
server.use('/api/users', usersRouter);


module.exports = server;