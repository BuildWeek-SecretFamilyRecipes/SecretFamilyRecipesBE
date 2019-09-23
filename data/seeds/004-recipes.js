
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
          category_id: '2',
          instructions: 'cook it',
          user_id: '1'
        },
        {
          id: 2,
          title: 'cereal',
          source: 'mom',
          category_id: '1',
          instructions: 'cereal first, then milk',
          user_id: '1'
        },
        {
          id: 3,
          title: 'rice',
          source: 'mom',
          category_id: '3',
          instructions: 'cook it',
          user_id: '2'
        }
      ]);
    });
};
