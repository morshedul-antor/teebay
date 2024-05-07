const { createHash, validateHash, createToken } = require('../../utils')
const { prismaClient } = require('../../db')

const userResolvers = {
    Query: {
        users: async () => await prismaClient.user.findMany(),
        user: async (_, { id }) => await prismaClient.user.findUnique({ where: { id } }),
    },

    Mutation: {
        createUser: async (_, { data }) => {
            try {
                const user = await prismaClient.user.findFirst({
                    where: {
                        OR: [{ email: data.email }, { phone: data.phone }],
                    },
                })

                if (user) {
                    throw new Error(`${user.email === data.email ? 'Email' : 'Phone number'} already exists!`)
                }

                const hashPassword = await createHash(data.password)
                data.password = hashPassword

                return await prismaClient.user.create({
                    data: data,
                })
            } catch (error) {
                throw new Error(error.message)
            }
        },

        login: async (_, { data }) => {
            const user = await prismaClient.user.findFirst({
                where: {
                    OR: [{ email: data.identifier }, { phone: data.identifier }],
                },
            })

            if (!user) {
                throw new Error('Invalid username or password!')
            }

            const isMacth = await validateHash(data.password, user.password)
            if (!isMacth) {
                throw new Error('Invalid username or password!')
            }

            const token = await createToken(user.id)
            return token
        },

        updateUser: async (_, { id, data }) => {
            const user = await prismaClient.user.findFirst({
                where: {
                    AND: [
                        { id: { not: id } },
                        {
                            OR: [{ email: data.email }, { phone: data.phone }],
                        },
                    ],
                },
            })

            if (user) {
                throw new Error(`${user.email === data.email ? 'Email' : 'Phone number'} already exists!`)
            }

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
