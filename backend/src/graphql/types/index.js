const { userTypeDefs } = require('./userTypes')
const { categoryTypeDefs } = require('./categoryTypes')
const { productTypeDefs } = require('./productTypes')

const typeDefs = `
    ${userTypeDefs}
    ${categoryTypeDefs}
    ${productTypeDefs}
`

module.exports = {
    typeDefs,
}
