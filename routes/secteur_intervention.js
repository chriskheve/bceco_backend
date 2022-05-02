const express = require('express');
const router = express.Router();
const secteurInterventionController = require('../controllers/secteur_intervention');
const { authentificateJWT } = require('../middleware/authentificator');

router.post('/',  secteurInterventionController.create);
router.get('/', secteurInterventionController.readAll);
// router.post('/', authentificateJWT, categoryController.create);
// router.get('/', authentificateJWT, categoryController.readAll);

module.exports = router;