
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
  },
  debugLevel: 'info',
  log4js: {
    "appenders": [
      {
        "type":"console"
      },
      {
        "type": "dateFile",
        "filename": "logs/server.log",
        "pattern":"-yyyy-MM-dd",
        "alwaysIncludePattern": false
      }
    ]
  }
};