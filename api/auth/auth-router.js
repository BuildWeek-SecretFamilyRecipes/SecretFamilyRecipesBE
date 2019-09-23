const express = require('express');
const Users = require('../users/users-model');

const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Users.getById(id)
        .then(user => res.status(200).json(user))
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'Could not retrieve user'});
        });
});

module.exports = router;