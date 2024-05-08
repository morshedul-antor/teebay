const { prismaClient } = require('../../db')

const productResolvers = {
    Query: {
        products: async () => {
            const products = await prismaClient.product.findMany({
                include: {
                    user: true,
                },
            })

            for (const product of products) {
                const categories = await prismaClient.category.findMany({
                    where: {
                        id: {
                            in: product.categoryIds,
                        },
                    },
                })
                product.categories = categories
            }

            return products
        },

        product: async (_, { id }) => {
            const product = await prismaClient.product.findUnique({
                where: { id },
                include: {
                    user: true,
                },
            })

            const categories = await prismaClient.category.findMany({
                where: {
                    id: {
                        in: product.categoryIds,
                    },
                },
            })
            product.categories = categories

            return product
        },

        productsByUser: async (_, { userId }) => {
            const products = await prismaClient.product.findMany({
                where: { userId },
            })

            for (const product of products) {
                const categories = await prismaClient.category.findMany({
                    where: {
                        id: {
                            in: product.categoryIds,
                        },
                    },
                })
                product.categories = categories
            }

            return products
        },
    },

    Mutation: {
        productCreate: async (_, { data }) => {
            try {
                return await prismaClient.product.create({
                    data: data,
                })
            } catch (error) {
                throw new Error(error.message)
            }
        },

        productUpdate: async (_, { id, data }) => {
            try {
                return await prismaClient.product.update({
                    where: { id },
                    data: data,
                })
            } catch (error) {
                throw new Error(error.message)
            }
        },

        productDelete: async (_, { id }) => {
            try {
                const product = await prismaClient.product.delete({
                    where: { id },
                })

                return `ID${product.id} - Product successfully deleted!`
            } catch (error) {
                throw new Error(error.message)
            }
        },
    },
}

module.exports = {
    productResolvers,
}
