const express = require('express');
const router = express.Router();
const foodAvailableHotels = require('../controllers/foodController');

router.get('/check-food-availability', foodAvailableHotels.checkFoodAvailability);

module.exports = router;