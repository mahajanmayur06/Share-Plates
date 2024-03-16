const express = require('express')
const router = express.Router()
const restaurantsController = require('../controllers/restaurantsController')

router.get('/hotels', restaurantsController.getRestaurants)

module.exports = router