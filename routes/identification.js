const express = require('express');
const router = express.Router();
const identificationController = require('../controllers/identification');
const { authentificateJWT } = require('../middleware/authentificator');

router.post('/',  identificationController.create);
router.get('/', identificationController.readAll);
// router.post('/', authentificateJWT, categoryController.create);
// router.get('/', authentificateJWT, categoryController.readAll);

module.exports = router;