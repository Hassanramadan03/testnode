const express = require('express');
const router = express.Router();
const auth_controller = require('./auth_controller');


router.post('/login',auth_controller.signin);
router.post('/signup',auth_controller.signup);

 

module.exports = router;