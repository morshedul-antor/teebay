const { userTypeDefs } = require('./userTypes')
const { categoryTypeDefs } = require('./categoryTypes')

const typeDefs = `
    ${userTypeDefs}
    ${categoryTypeDefs}
`

module.exports = {
    typeDefs,
}
