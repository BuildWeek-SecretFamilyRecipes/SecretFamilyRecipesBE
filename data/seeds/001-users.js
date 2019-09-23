
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: '1',
          username: 'ed',
          password: '123'
        },
        {
          id: '2',
          username: 'edd',
          password: '123'
        },
        {
          id: '3',
          username: 'eddy',
          password: '123'
        }
      ]);
    });
};
