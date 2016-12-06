var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var config = require('../config/index');
var User = require('../models/users');

passport.use(
  new Strategy(
    config.facebook,
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile);
    }
  )
);

passport.serializeUser(function(fbUser, cb) {
  User.getUserByFacebookId(fbUser.id, function(err, user) {
    fbUser.userId = user && user.id;
    cb(null, fbUser);
  });
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});