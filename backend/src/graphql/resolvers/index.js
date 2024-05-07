const { userResolvers } = require('./userResolvers')
const { categoryResolvers } = require('./categoryResolvers')

const resolvers = {
    Query: {
        ...userResolvers.Query,
        ...categoryResolvers.Query,
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...categoryResolvers.Mutation,
    },
}

module.exports = {
    resolvers,
}
