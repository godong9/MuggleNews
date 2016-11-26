const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

router.post('/pre/register', UserController.insertPreUser);

module.exports = router;
