const express = require('express');
const router = express.Router();
const prestataireController = require('../controllers/prestataire');
const { authentificateJWT } = require('../middleware/authentificator');
const upload = require('../middleware/multer')

router.post('/', upload.single('document'),  prestataireController.create);
router.get('/', prestataireController.readAll);
// router.post('/', authentificateJWT, categoryController.create);
// router.get('/', authentificateJWT, categoryController.readAll);

module.exports = router;