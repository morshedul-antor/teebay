const { userResolvers } = require('./userResolvers')
const { categoryResolvers } = require('./categoryResolvers')
const { productResolvers } = require('./productResolvers')
const { orderResolvers } = require('./orderResolvers')

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...categoryResolvers.Query,
        ...productResolvers.Query,
        ...orderResolvers.Query,
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...categoryResolvers.Mutation,
        ...productResolvers.Mutation,
        ...orderResolvers.Mutation,
    },
}

module.exports = {
    resolvers,
}
