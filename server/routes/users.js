'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const passport = require('passport');

router.get('/login/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login/error' }),
  UserController.facebookLoginCallback);

router.get('/logout', UserController.logout);

router.post('/pre/register', UserController.insertPreUser);

module.exports = router;
