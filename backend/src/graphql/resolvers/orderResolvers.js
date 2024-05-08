const { prismaClient } = require('../../db')

const orderResolvers = {
    Query: {
        orders: async () => {
            try {
                const orders = await prismaClient.order.findMany({
                    include: {
                        product: true,
                    },
                })

                for (const order of orders) {
                    const product = order.product
                    const categories = await prismaClient.category.findMany({
                        where: {
                            id: {
                                in: product.categoryIds,
                            },
                        },
                    })
                    product.categories = categories
                }

                return orders
            } catch (error) {
                throw new Error(error.message)
            }
        },
    },

    Mutation: {
        orderCreate: async (_, { data }) => {
            try {
                return await prismaClient.order.create({
                    data: data,
                })
            } catch (error) {
                throw new Error(error.message)
            }
        },
    },
}

module.exports = {
    orderResolvers,
}
