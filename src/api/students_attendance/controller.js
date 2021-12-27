const StudentAttendance = require('./model')

const setAttendance = async (req, res, next) => {
    try {
        let { group_id, date, student_id } = req.body
        const saveAttendance = await Student_attendance.build({
            group_id: group_id,
            date: date,
            student_id: student_id
        })

        // Validar que se pueda agregar solo en las fechas indicadas del curso
        await saveAttendance.save()
        res.status(200).json({
            msg: 'Asistencia agregada'
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message
        })
    }
}

module.exports = { setAttendance }