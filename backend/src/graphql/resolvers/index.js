const resolvers = {
    Query: {
        greet: (_, { name }) => `Hey, ${name}`,
    },
}

module.exports = {
    resolvers,
}
