const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');

const router = express.Router();

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    if(username && password) {
        Users.insert({username, password: hash})
            .then(user => res.status(201).json(user))
            .catch(err => {
                console.log(err);
                res.status(500).json({error: 'Could not register user'});
            });
    } else {
        res.status(400).json({message: 'Must provide username and password'});
    }
});

module.exports = router;