const db = require('../../data/dbConfig.js')

module.exports = {
    getById,
    getByUsername,
    insert
}

function getById(id) {
    return db('users')
        .where({id: id})
        .first();
}

function getByUsername(username) {
    return db('users')
        .where({username: username})
        .first();
}

function insert(user) {
    db('users')
        .insert(user)
        .then(([id]) => getById(id));
}