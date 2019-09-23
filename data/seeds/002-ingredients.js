
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          id: '1',
          name: 'cereal'
        },
        {
          id: '2',
          name: 'macaroni'
        },
        {
          id: '3',
          name: 'rice'
        },
      ]);
    });
};
