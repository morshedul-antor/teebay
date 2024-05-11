const orderTypeDefs = `
    scalar DateTime

    type Query {
        orders: [OrderOut]
        ordersByUser(userId: Int!, type: OrderFilterType!): [OrderOut]
    }

    type Mutation {
        orderCreate(data: OrderIn): OrderOut
    }

    input OrderIn {
        orderType: OrderType!
        totalAmount: Float!
        periodStart: DateTime
        periodEnd: DateTime
        remarks: String
        providerId: Int!
        recipientId: Int!
        productId: Int!
    }

    type OrderOut {
        orderType: String
        totalAmount: Float
        periodStart: DateTime
        periodEnd: DateTime
        remarks: String
        id: Int
        createdAt: DateTime
        product: Product
        providerId: Int
        recipientId: Int
    }

    type Product{
        title: String
        description: String
        price: Float
        rentPrice: Float
        rentDay: String
        categoryName: String
        id: Int
        createdAt: DateTime
        categories: [Category]
    }

    type Category {
        name: String
        id: Int
    }

    enum OrderType {
        trade
        rent
    }

    enum OrderFilterType {
        bought
        sold
        borrowed
        lent
    }
`

module.exports = {
    orderTypeDefs,
}
