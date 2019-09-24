
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          title: 'macaroni',
          source: 'grandma',
          category: 'lunch',
          instructions: 'cook it',
          user_id: '1',
          ingredients: 'macaroni'
        },
        {
          id: 2,
          title: 'cereal',
          source: 'mom',
          category: 'breakfast',
          instructions: 'cereal first, then milk',
          user_id: '1',
          ingredients: 'cereal, milk'
        },
        {
          id: 3,
          title: 'rice',
          source: 'mom',
          category: 'dinner',
          instructions: 'cook it',
          user_id: '2',
          ingredients: 'rice'
        }
      ]);
    });
};
