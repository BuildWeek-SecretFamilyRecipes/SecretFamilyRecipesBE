const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');
const secrets = require('../secrets.js');

const router = express.Router();

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    if(username && password) {
        Users.insert({username, password: hash})
            .then(user => {
                token = generateToken(user);
                res.status(201).json({user, token})
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'Could not register user'});
            });
    } else {
        res.status(400).json({message: 'Must provide username and password'});
    }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(username && password) {
        Users.getByUsername(username)
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    res.status(200).json({
                        user,
                        token
                    });
                } else {
                    res.status(401).json({message: 'invalid username or password'});
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'Could not log in'});
            });
    } else {
        res.status(400).json({message: 'Must provide username and password'});
    }
})

// generate token ###############################################################
function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username
    };
    const options = {
        expiresIn: '1d'
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
  }

module.exports = router;