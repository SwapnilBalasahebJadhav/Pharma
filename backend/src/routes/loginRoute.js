const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.post('/loginUser', loginController.loginUser);

module.exports = router;
