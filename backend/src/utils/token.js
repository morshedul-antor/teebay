const jwt = require('jsonwebtoken')

const createToken = async (id) => {
    const token = jwt.sign({ sid: id }, process.env.JWT_SECRET, {
        expiresIn: '48h',
        algorithm: 'HS256',
    })

    return { token: token, type: 'bearer' }
}

module.exports = {
    createToken,
}
