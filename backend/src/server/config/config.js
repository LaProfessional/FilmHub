require('dotenv').config({ path: '../.env' })

module.exports = {
  development: {
    username: process.env.NITRO_DB_USER,
    password: process.env.NITRO_DB_PASSWORD,
    database: process.env.NITRO_DB_NAME,
    host: process.env.NITRO_DB_HOST,
    port: parseInt(process.env.NITRO_DB_PORT),
    dialect: 'postgres',
  },
};
