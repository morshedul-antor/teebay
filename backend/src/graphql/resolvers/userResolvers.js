const { prismaClient } = require('../../db')

const userResolvers = {
    Query: {
        users: async () => await prismaClient.user.findMany(),
        user: async (_, { id }) => await prismaClient.user.findUnique({ where: { id } }),
    },

    Mutation: {
        createUser: async (_, { data }) => {
            try {
                return await prismaClient.user.create({
                    data: data,
                })
            } catch (error) {
                throw new Error(error.message)
            }
        },

        updateUser: async (_, { id, data }) => {
            return await prismaClient.user.update({
                where: { id },
                data: data,
            })
        },
    },
}

module.exports = {
    userResolvers,
}
