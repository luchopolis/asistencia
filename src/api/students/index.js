const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.index)
router.post('/', controller.create)
router.put('/update', controller.update)

// Student individual data
router.get('/:id', controller.infoStudent)
// Save attendance
router.post('/set-attendance', controller.setAttendance)

module.exports = router
