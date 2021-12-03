const Student = require('./model')
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

const create = async (req, res, next) => {
    //const { first_name, last_name, address, phone_numer } = req.body
    res.end(_getCode()) 
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

module.exports = { index, create }