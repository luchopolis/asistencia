
const Teacher = require('./teacher')

// UTILS
const { notFound, success, errorResponse } = require('../../utils/response')
const { generateCode, codeExpiration } = require('../../utils/index')
const User = require('../users/model')
const UserTeachers = require('../users_teachers/userteachers')
const Roles = require('../roles/roles')

const rolesValues = require('../roles/values')

// CheckCode
const _checkIfCodeExist = async (code) => {
    try {
        const verify = await Teacher.findAll({ code: code })
        if (verify.length > 0) {
            return true
        }
        return false
    } catch (error) {
        if (error) throw new Error(error.message)
    }
}

// generateCode
const _getCode = () => {
    const code = generateCode(true)
    if (!_checkIfCodeExist(code)){
        return code
    }else {
        return generateCode(true)
    }
}

const create = async (req, res) => {
    try {
        const { first_name, last_name, address, phone_number } = req.body

        const randomCode = _getCode()

        const teacher = Teacher.build({
            first_name: first_name,
            last_name: last_name,
            code: randomCode,
            address: address,
            phone_number: phone_number
        })
        const teacherCreated = await teacher.save()
        
        const user = await User.build({ username: randomCode, password: 'DOCENTE.01', role_id: rolesValues.teacher })
        const teacherUser = await user.save()

        const userTeacher = await UserTeachers.build({ 
            user_id: teacherUser.getDataValue('id'),
            teacher_id: teacherCreated.getDataValue('id')
        })
        await userTeacher.save()

        success(res, {
            username: user.getDataValue('username'),
            password: user.getDataValue('password')
        })

    } catch (error) {
        errorResponse(res,500,error.message)
    }
}

module.exports = { create }