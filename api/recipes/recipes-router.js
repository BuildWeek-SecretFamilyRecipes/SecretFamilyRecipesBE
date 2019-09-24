const express = require('express');
const db = require('./recipes-model.js');

const router = express.Router();

router.get('/users/:user_id/recipes', (req, res) => {
    const { user_id } = req.params;

    db.findByUser(user_id)
        .then(recipes => {
            if(recipes.length) {
                res.status(200).json(recipes)
            } else {
                res.status(404).json({message: 'Recipes for specified User Id not found'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'Unable to get recipes for specified User due to server error'})
        });
});

router.get('/users/recipes/:id', (req, res) => {
    const { id } = req.params;

    db.findById(id)
        .then(recipe => {
            if(recipe) {
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

router.post('/users/:user_id/recipes', (req, res) => {
    const { user_id } = req.params
    const recipe = req.body;

    db.add({...recipe, user_id})
        .then(recipe => {
            console.log(recipe)
            return res.status(201).json(recipe)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message: 'it is not working'})
        })
})

router.put('/users/recipes/:id', (req, res) => {
    const {id} = req.params;
    const recipe = req.body;

    db.edit(recipe, id)
        .then(recipe => {
            if(recipe) {
                return res.status(200).json(recipe)
            } else {
                return res.status(400).json({message: 'not able to edit recipe'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'its not working'})
        })
})

router.delete('/users/recipes/:id', (req, res) => {
    const {id} = req.params;

    db.remove(id)
        .then(count => {
            if(count > 0) {
                res.status(200).json({message: 'deleted!'})
            } else {
                res.status(404).json({message: 'recipe with id not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to delete due to server error'})
        })
})


module.exports = router;