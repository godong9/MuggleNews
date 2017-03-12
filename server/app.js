var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var log4js = require('log4js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var sm = require('sitemap');
var MySQLStore = require('express-mysql-session')(session);

var auth = require('./middlewares/auth');
var config = require('./config/index');

var index = require('./routes/index');
var users = require('./routes/users');
var images = require('./routes/images');
var timelines = require('./routes/timelines');
var previews = require('./routes/previews');
var Slack = require('./services/slack');

log4js.configure(config.log4js);
log4js.setGlobalLogLevel(config.debugLevel);

var app = express();

var sessionStore = new MySQLStore({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser({limit: '30mb'}));
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/doc', express.static(path.join(__dirname, 'doc')));

// Session
if (config.isProduction()) {
  app.use(session({
    key: config.cookie_key,
    secret: config.secret,
    store: sessionStore,
    resave: true,
    saveUninitialized: true
  }));

} else {
  app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }));
}

app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/images', images);
app.use('/timelines', timelines);
app.use('/previews', previews);

// Sitemap.xml
var sitemap = sm.createSitemap({
  hostname: 'http://muggle.news',
  cacheTime: 3600000, // 1시간
  urls: [
    { url: '/',  changefreq: 'hourly' },
    { url: '/timelines/1',  changefreq: 'hourly' },
    { url: '/timelines/2',  changefreq: 'hourly' },
    { url: '/timelines/3',  changefreq: 'hourly' },
    { url: '/timelines/24',  changefreq: 'hourly' },
    { url: '/timelines/25',  changefreq: 'hourly' },
    { url: '/timelines/29',  changefreq: 'hourly' },
    { url: '/timelines/30',  changefreq: 'hourly' }
  ]
});

app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send( xml );
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  var View = require('./services/view');
  var data = {};

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  View.setCommonData(req, data);

  // render the error page
  res.status(err.status || 500);

  Slack.sendErrorReport(err);

  res.render('error', data);
});

module.exports = app;
