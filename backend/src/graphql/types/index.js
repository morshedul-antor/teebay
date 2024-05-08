const { userTypeDefs } = require('./userTypes')
const { categoryTypeDefs } = require('./categoryTypes')
const { productTypeDefs } = require('./productTypes')
const { orderTypeDefs } = require('./orderTypes')

const typeDefs = `
    ${userTypeDefs}
    ${categoryTypeDefs}
    ${productTypeDefs}
    ${orderTypeDefs}
`

module.exports = {
    typeDefs,
}
