const { userResolvers } = require('./userResolvers')
const { categoryResolvers } = require('./categoryResolvers')
const { productResolvers } = require('./productResolvers')

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...categoryResolvers.Query,
        ...productResolvers.Query,
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...categoryResolvers.Mutation,
        ...productResolvers.Mutation,
    },
}

module.exports = {
    resolvers,
}
