const User = require('../users/model')

const simpleAuth = async (req, res, next) => {
    const { username, password } = req.body
    
    if(!username || !password) {
        res.status(400).json( { msg: 'username and password required '})
    }else {
        try {
            const user = await _findUser({ username, password})
            const status = (user.user === false) ? 404 : 200
            res.status(status).json(user)
        } catch (error) {
            res.status(500).json({
                msg: error.message
            })
        }
    }
    
}

const _findUser = async ({ username, password }) => {
    const user = await User.findOne({ where: { username: username, password: password, isActive: true }, attributes: ['id','username','isActive','createdAt']})

    if(user != null){
        if(user.isActive == false){
            return {
                user: 'This account was disable'
            }
        }
        return {
            user: user
        }
    }else {
        return {
            user: false
        }
    }
}

module.exports = {simpleAuth}
