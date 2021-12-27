const router = require('express').Router()
const Controller = require('./controllers')

router.post('/', Controller.create)

module.exports = router