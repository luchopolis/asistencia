const express = require('express')
const router = express.Router()
const controller = require('./Controller')
const studentController = require('../students/controller')
// StudentController

router.post('/basic-auth',controller.simpleAuth)
router.post('/student-register', studentController.create) // middleware para validar el registerCode

module.exports = router
