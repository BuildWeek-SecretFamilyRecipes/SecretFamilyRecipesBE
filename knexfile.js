// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    // useNullAsDefault: true,
    connection: {
      filename: './data/recipes.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    }, 
    seeds: {
      directory: './data/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/seeds/recipes.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations'
    }, 
    seeds: {
      directory: './data/seeds'
    }
  },

};
