const router = require('express').Router()
const Controller = require('./controller')

router.post('/', Controller.create)

module.exports = router

