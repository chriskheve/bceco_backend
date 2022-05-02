const express = require('express');
const router = express.Router();
const { signinValidator, validatorResult } = require('../middleware/validator')
const { signinController } = require('../controllers/auth')


router.post('/signin', signinValidator, validatorResult, signinController)

module.exports = router;