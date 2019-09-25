
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id');
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
    })
    // .createTable('ingredients', tbl => {
    //     tbl.increments('id');
    //     tbl.string('name', 32).notNullable().unique();
    // })
    // .createTable('category', tbl => {
    //     tbl.increments('id');
    //     tbl.string('category_name', 32).notNullable().unique();
    // })
    .createTable('recipes', tbl => {
        tbl.increments('id');
        tbl.string('title').notNullable();
        tbl.string('source');
        // tbl.string('category_id').notNullable();
        tbl.string('instructions');
        tbl.string('user_id').notNullable();
        tbl.string('category');
        tbl.string('ingredients').notNullable();
        // 1 tsp salt
    })
    // .createTable('recipe_ingredients', tbl => {
    //     tbl.string('recipe_id').notNullable();
    //     tbl.string('ingredient_id').notNullable();
    //     tbl.string('measurement', 32);
    //     tbl.primary(['recipe_id', 'ingredient_id']);
    // })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('category')
        .dropTableIfExists('recipes')
        .dropTableIfExists('recipe_ingredients');
};
