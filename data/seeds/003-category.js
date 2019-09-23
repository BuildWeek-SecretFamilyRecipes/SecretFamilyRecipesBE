
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {
          id: '1',
          category_name: 'breakfast'
        },
        {
          id: '2',
          category_name: 'lunch'
        },
        {
          id: '3',
          category_name: 'dinner'
        }
      ]);
    });
};
