const jwt = require('jsonwebtoken')

const createToken = async (id) => {
    const token = jwt.sign({ sid: id }, process.env.JWT_SECRET, {
        expiresIn: '48h',
    })

    return { token: token, type: 'bearer' }
}

module.exports = {
    createToken,
}
