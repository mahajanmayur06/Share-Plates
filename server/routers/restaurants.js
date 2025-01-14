const express = require('express')
const router = express.Router()
const restaurantsController = require('../controllers/restaurantsController')

router.get('/hotels', restaurantsController.getRestaurants)
router.get('/restaurant', restaurantsController.getRestaurant)
router.post('/add-food', restaurantsController.addFood)
router.post('/register-restaurant', restaurantsController.registerRestaurant)

module.exports = router