const Student = require('./model')
const User = require('../users/model')
const UserStudents = require('../users_students/model')

const { generateCode } = require('../../utils/index')

const index = async (req, res, next) => {
    try {
        const getAll = await Student.findAll({})
        res.status(200).json(getAll)        
    } catch (error) {
        if (error) {
            res.status(500).json({
                error: error.stack
            })
        }
    }
}

// CheckCode
const _checkIfCodeExist = async (code) => {
    try {
        const verify = await Student.findAll({ code: code })
        if (verify.length > 0) {
            return true
        }
        return false
    } catch (error) {
        if (error) throw new Error(error.stack)
    }
}

// generateCode
const _getCode = () => {
    const code = generateCode()
    if (!_checkIfCodeExist(code)){
        return code
    }else {
        return generateCode()
    }
}

const create = async (req, res, next) => {
    const { first_name, last_name, address, phone_number } = req.body
    try {
        const randomCode = _getCode()
        const student = Student.build({
            first_name: first_name,
            last_name: last_name,
            code: randomCode,
            address: address,
            phone_number: phone_number
        })

        const studentCreated = await student.save()
        // Create the user for the student
        const user = User.build({ username: randomCode })
        const studentUser = await user.save()
        // create the relation
        const userStudent = UserStudents.build({ user_id: studentUser.getDataValue('id'), student_id: studentCreated.getDataValue('id') })
        await userStudent.save()

        res.status(200).json({
            username: user.getDataValue('username'),
            password: user.getDataValue('password')
        })

    } catch (error) {
        console.log(error.stack)
        res.status(400).json({
            error: error.message
        })
    }
}


module.exports = { index, create }