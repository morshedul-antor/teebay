const { prismaClient } = require('../../db')

const categoryResolvers = {
    Query: {
        categories: async () => await prismaClient.category.findMany(),
        category: async (_, { id }) => await prismaClient.category.findUnique({ where: { id } }),
    },

    Mutation: {
        createCategory: async (_, { data }) => {
            try {
                const category = await prismaClient.category.findFirst({
                    where: {
                        name: data.name,
                    },
                })

                if (category) {
                    throw new Error('Category already exists!')
                }

                return await prismaClient.category.create({
                    data: data,
                })
            } catch (error) {
                throw new Error(error.message)
            }
        },

        updateCategory: async (_, { id, data }) => {
            const category = await prismaClient.category.findFirst({
                where: {
                    AND: [{ id: { not: id } }, { name: data.name }],
                },
            })

            if (category) {
                throw new Error('Category already exists!')
            }

            return await prismaClient.category.update({
                where: { id },
                data: data,
            })
        },
    },
}

module.exports = {
    categoryResolvers,
}
