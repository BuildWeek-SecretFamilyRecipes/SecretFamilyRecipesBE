const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    edit,
    remove,
    findById, 
    findByUser,
};

function findByUser(user_id) {
    return db('recipes')
        .where({user_id: user_id})
};

function findById(id) {
    return db('recipes')
        .where({id: id})
        .first();
};

function add(recipe) {
    return db('recipes')
        .insert(recipe, 'id')
        .then(([id]) => findById(id));
};

function edit(recipe, id) {
    return db('recipes')
        .where({id})
        .update(recipe)
        .then(count => {
            if(count > 0) {
                return findById(id)
            }
        });  
};

function remove(id) {
    return db('recipes')
        .where({id})
        .del()
};