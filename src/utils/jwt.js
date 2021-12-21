const jwt = require('jsonwebtoken')

const key = "ASISTENCIA!#$"

const sign = (payload, expiration = '24h') => jwt.sign(payload,key, { expiresIn: expiration })
const verify = (token,privateKey) => jwt.verify(token, privateKey)

module.exports = { sign, verify }
