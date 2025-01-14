const express = require('express');
const router = express.Router();
const ngoController = require('../controllers/ngoController')

router.get('/get-all-community', ngoController.getAllNGOs)
router.post('/register-community', ngoController.registerNGO)
router.post('/give-rating', ngoController.giveRatings)

module.exports = router