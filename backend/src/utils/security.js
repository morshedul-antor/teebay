const bcrypt = require('bcrypt')

const createHash = async (password) => {
    return await bcrypt.hash(password, 10)
}

const validateHash = async (plainPassword, hashPassword) => {
    return await bcrypt.compare(plainPassword, hashPassword)
}

module.exports = {
    createHash,
    validateHash,
}
