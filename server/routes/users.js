'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const passport = require('passport');

/* GET user mypage. */
router.get('/mypage/:userId', UserController.getUserMyPage);

/* GET facebook login page */
router.get('/login/facebook', passport.authenticate('facebook', { scope: ['email'] }));

/* GET facebook login callback page */
router.get('/login/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login/error' }),
  UserController.facebookLoginCallback);

/* GET logout page */
router.get('/logout', UserController.logout);

router.post('/pre/register', UserController.insertPreUser);

module.exports = router;
