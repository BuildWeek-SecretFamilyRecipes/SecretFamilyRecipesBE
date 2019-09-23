
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_id: '1',
          ingredient_id: '1',
          measurement: '2 tsp'
        },
        {
          recipe_id: '2',
          ingredient_id: '2',
          measurement: '2 tbsp'
        },
        {
          recipe_id: '3',
          ingredient_id: '3',
          measurement: '1 cup'
        }
      ]);
    });
};
