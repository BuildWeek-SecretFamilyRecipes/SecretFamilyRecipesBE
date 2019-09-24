const db = require('../../data/dbConfig.js');

module.exports = {
    add,
    edit,
    remove,
    findById, 
    findByUser
    //findCategory,
    //addIngredients,
};

function findByUser(user_id) {
    return db('recipes')
        .select(
            'recipes.id',
            'recipes.title',
            'recipes.source',
            'category.category_name',
            'ingredients.name',
            'recipe_ingredients.measurement',
            'recipes.instructions',
        )
        .join('category', 'category.id', 'recipes.category_id')
        .join(
            'recipe_ingredients', 
            'recipes.id', 
            'recipe_ingredients.recipe_id', 
        )
        .join(
            'ingredients',
            'ingredients.id',
            'recipe_ingredients.ingredient_id',
        )
        .where({user_id: user_id})
};

function findById(id) {
    return db('recipes')
        .select([
            'recipes.id',
            'recipes.title',
            'recipes.source',
            'category.category_name',
            'ingredients.name as ingredient_name',
            'recipe_ingredients.measurement',
            'recipes.instructions',
        ])
        .join('category', 'category.id', 'recipes.category_id')
        .join(
            'recipe_ingredients', 
            'recipes.id', 
            'recipe_ingredients.recipe_id', 
        )
        .join(
            'ingredients',
            'ingredients.id',
            'recipe_ingredients.ingredient_id',
        )
        .where({'recipes.id': id})
        .first();
};

function add(recipe) {
    return db('recipes')
        .join('category', 'category.id', 'recipes.category_id')
        .join(
            'recipe_ingredients', 
            'recipes.id', 
            'recipe_ingredients.recipe_id', 
        )
        .join(
            'ingredients',
            'ingredients.id',
            'recipe_ingredients.ingredient_id',
        )
        .insert(recipe)
        .then(([id]) => {
            return findById(id);
        });
};

function edit(id, recipe) {
    return db('recipes')
        .join('category', 'category.id', 'recipes.category_id')
        .join(
            'recipe_ingredients', 
            'recipes.id', 
            'recipe_ingredients.recipe_id', 
        )
        .join(
            'ingredients',
            'ingredients.id',
            'recipe_ingredients.ingredient_id',
        )
        .where({id})
        .update(recipe)
        .then(([id]) => {
            return findById(id);
        });
        
};

function remove(id) {
    return db('recipes')
        .where({id})
        .delete()
};