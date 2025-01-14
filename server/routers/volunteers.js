const express = require('express')
const router = express.Router()
const volunteerController = require('../controllers/volunteerController')

router.post('/register-volunteer', volunteerController.registerVolunteer)
router.put('/volunteer-free-to-work', volunteerController.freeToWork)
router.get('/get-ngo', volunteerController.getNgo)
router.post('./accept-from-ngo', volunteerController.acceptRequestFromNgo)

module.exports = router