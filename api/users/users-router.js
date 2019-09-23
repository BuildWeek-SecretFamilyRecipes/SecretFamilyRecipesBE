const express = require('express');
const Users = require('./users-model.js');
const authenticate = require('../auth/auth-middleware.js');

const router = express.Router();

router.get('/:id', authenticate, (req, res) => {
    const { id } = req.params;

    Users.getById(id)
        .then(user => {
            if(user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({message: 'User does not exist'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'Could not retrieve user'});
        })
})

module.exports = router;