const express = require('express')
const app = express()
const pruebaRuta = require('./api/prueba/index')
const studentsRoute = require('./api/students/index')
const teachersRoute = require('./api/teachers')
const auth = require('./api/auth/index')
const registerCode = require('./api/registerCodes/index')

app.use(express.json())

app.get('/', (req, res, next) => res.end('API REGISTRO ASISTENCIA'))
app.use('/students', studentsRoute)
app.use('/teachers', teachersRoute)
app.use('/auth', auth)
app.use('/registerCode', registerCode)

app.listen(3000, () => {
    console.log("Running at 3000")
})