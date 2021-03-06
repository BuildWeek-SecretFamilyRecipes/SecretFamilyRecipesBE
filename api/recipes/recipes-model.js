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
        // .select(
        //     'recipes.id',
        //     'recipes.title',
        //     'recipes.source',
        //     'category.category_name',
        //     'ingredients.name',
        //     'recipe_ingredients.measurement',
        //     'recipes.instructions',
        //     'recipes.user_id'
        // )
        // .join('category', 'category.id', 'recipes.category_id')
        // .join(
        //     'recipe_ingredients', 
        //     'recipes.id', 
        //     'recipe_ingredients.recipe_id', 
        // )
        // .join(
        //     'ingredients',
        //     'ingredients.id',
        //     'recipe_ingredients.ingredient_id',
        // )
        .where({user_id: user_id})
};

function findById(id) {
    return db('recipes')
        // .select([
        //     'recipes.id',
        //     'recipes.title',
        //     'recipes.source',
        //     'category.category_name',
        //     'ingredients.name as ingredient_name',
        //     'recipe_ingredients.measurement',
        //     'recipes.instructions',
        //     'recipes.user_id'
        // ])
        // .join('category', 'category.id', 'recipes.category_id')
        // .join(
        //     'recipe_ingredients', 
        //     'recipes.id', 
        //     'recipe_ingredients.recipe_id', 
        // )
        // .join(
        //     'ingredients',
        //     'ingredients.id',
        //     'recipe_ingredients.ingredient_id',
        // )
        .where({id: id})
        .first();
};

function add(recipe) {
    return db('recipes')
        .insert(recipe, 'id')
        .then(([id]) => {
            console.log(id)
            return findById(id)
        });
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