var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var config = require('../config/index');

passport.use(
  new Strategy(
    config.facebook,
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});