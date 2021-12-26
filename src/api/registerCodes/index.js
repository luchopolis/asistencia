const express = require('express')
const router = express.Router()

/*  CONTROLLER */
const Controller = require('./controller')


router.post('/', Controller.createCode)

module.exports = router