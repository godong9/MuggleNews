
module.exports = {
  env: 'development',
  secret: 'express-server',
  imgIP : 'http://localhost:3000',
  db: {
    database: 'server',
    host: 'localhost',
    port: 5306,
    user: '',
    password: '',
    connectionLimit: 10
  }
};