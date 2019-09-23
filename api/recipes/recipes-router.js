const express = require('express');
const db = require('./recipes-model.js');

const router = express.Router();

router.get('/:user_id', (req, res) => {
    const user_id = req.params;

    db.findByUser(user_id)
        .then(recipes => {
            if(user_id) {
                res.status(200).json(recipes)
            } else {
                res.status(404).json({message: 'User with specified id not found'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'Unable to get recipes for specified User due to server error'})
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.findById(id)
        .then(recipe => {
            if(id) {
                res.status(200).json(recipe)
            } else {
                res.status(404).json({message: 'Unable to get recipe with specified id'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: "Unable to get recipe due to a server error"})
        });
});


module.exports = router;