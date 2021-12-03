const express = require('express')
const app = express()
const pruebaRuta = require('./api/prueba/index')
const studentsRoute = require('./api/students/index')

app.use(express.json())

app.get('/', (req, res, next) => res.end('API REGISTRO ASISTENCIA'))
app.use('/students', studentsRoute)

app.listen(3000, () => {
    console.log("Running at 3000")
})