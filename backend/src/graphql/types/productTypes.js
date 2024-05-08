const productTypeDefs = `
    scalar DateTime

    type Query {
        products: [ProductWithUserAndCategory]
        product(id: Int!): ProductWithUserAndCategory
        productsByUser(userId: Int!): [ProductWithCategory]
    }

    type Mutation {
        productCreate(data: ProductIn!): Product
        productUpdate(id: Int!, data: ProductUpdate): Product
        productDelete(id: Int!): String
    }

    input ProductIn {
        title: String!
        description: String!
        price: Float!
        rentPrice: Float
        rentDay: String
        userId: Int!
        categoryIds: [Int!]!
    }

    input ProductUpdate {
        title: String
        description: String
        price: Float
        rentPrice: Float
        rentDay: String
    }

    type Product {
        title: String
        description: String
        price: Float
        rentPrice: Float
        rentDay: String
        id: Int
        createdAt: DateTime
    }

    type ProductWithCategory {
        title: String
        description: String
        price: Float
        rentPrice: Float
        rentDay: String
        id: Int
        createdAt: DateTime
        categories: [Category]
    }

    type ProductWithUserAndCategory {
        title: String
        description: String
        price: Float
        rentPrice: Float
        rentDay: String
        id: Int
        createdAt: DateTime
        user: User
        categories: [Category]
    }

    type User {
        firstName: String
        lastName: String
        email: String
        phone: String
        address: String
        id: Int
    }

    type Category {
        name: String
        id: Int
    }
`

module.exports = {
    productTypeDefs,
}
