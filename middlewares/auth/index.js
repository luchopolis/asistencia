const { verify } = require('../../src/utils/jwt')

const key = "ASISTENCIA!#$"

const verifyToken = (req, res, next) => {
    try {
        const { token } = req.body
        if(!token) {
            req.status(401).json({
                msg: 'Need the token field'
            })
            return 
        }
        const decoded = verify(token, key)
        req.user = decoded
        next()
    } catch (error) {
        req.status(401).json({
            msg: 'Invalid Token'
        })
    }
}

module.exports = { verifyToken }