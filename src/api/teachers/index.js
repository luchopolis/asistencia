const express = require('express')
const router = express.Router()

const Controller = require('./controller')

router.post('/', Controller.create)

module.exports = router