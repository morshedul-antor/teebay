const jwt = require('jsonwebtoken')

const createToken = async (id) => {
    const token = jwt.sign({ sid: id }, process.env.JWT_SECRET, {
        expiresIn: '48h',
        algorithm: 'HS256',
    })
    return { token: token, type: 'bearer' }
}

const validateToken = async (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
        algorithms: ['HS256'],
    })
    return { userId: decoded.sid }
}

module.exports = {
    createToken,
    validateToken,
}
