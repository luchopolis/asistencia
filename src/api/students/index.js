const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.index)
router.get('/create', controller.create)
router.post('/ejemplo', (req, res, next) => res.end('hola') )
module.exports = router
