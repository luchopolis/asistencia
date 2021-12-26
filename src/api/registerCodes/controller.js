const RegisterCode = require('./registercodes')
const { notFound, success, error, errorResponse } = require('../../utils/response')
const { generateRegisterCode }  = require('../../utils/index')

const createCode = async (req, res) => {
    try {
        let codeRegister = generateRegisterCode()
        if(!await _checkIfCodeExists(codeRegister)){
            const actualHours = new Date().getHours()
            const expiration = new Date().setHours(actualHours + 1)
            const code = RegisterCode.build({
                code: codeRegister,
                expiration: expiration,
            })
            
            if(await code.save()){
                success(res,{ code: codeRegister})
            }
            
        }
    } catch (error) {
        errorResponse(res,500,error.message)
    }
}

const _checkIfCodeExists = async (code) => {
    try {
        const find = await RegisterCode.findOne({ where: { code: code } })
        if(!find){
            return false
        }
        return true
    } catch (error) {
        errorResponse(res,500,error.message)
    }
}


module.exports = { createCode }