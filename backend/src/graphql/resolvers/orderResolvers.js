const { prismaClient } = require('../../db')

const orderResolvers = {
    Query: {
        orders: async () => {
            try {
                const orders = await prismaClient.order.findMany({
                    include: {
                        product: true,
                    },
                    orderBy: {
                        createdAt: 'desc',
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

        ordersByUser: async (_, { userId, type }) => {
            let filter = { orderType: 'trade' }

            // type: bought, sold, borrowed and lent
            if (type === 'bought') {
                filter.recipientId = userId
            } else if (type === 'sold') {
                filter.providerId = userId
            } else if (type === 'borrowed') {
                filter = {
                    orderType: 'rent',
                    recipientId: userId,
                }
            } else {
                filter = {
                    orderType: 'rent',
                    providerId: userId,
                }
            }

            try {
                const orders = await prismaClient.order.findMany({
                    where: filter,
                    include: {
                        product: true,
                    },
                    orderBy: {
                        createdAt: 'desc',
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
