const express = require('express')
const app = express()
const pruebaRuta = require('./api/prueba/index')
const studentsRoute = require('./api/students/index')
const teachersRoute = require('./api/teachers')
const courseRoute = require('./api/courses/index')
const auth = require('./api/auth/index')
const registerCode = require('./api/registerCodes/index')
const courseSchedule = require('./api/course_schedules/index')

app.use(express.json())

app.get('/', (req, res, next) => res.end('API REGISTRO ASISTENCIA'))
app.use('/students', studentsRoute)
app.use('/teachers', teachersRoute)
app.use('/auth', auth)
app.use('/courses', courseRoute)
app.use('/course_schedule', courseSchedule)
app.use('/registerCode', registerCode)

app.listen(3000, () => {
    console.log("Running at 3000")
})