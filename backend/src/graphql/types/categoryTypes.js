const categoryTypeDefs = `
    scalar DateTime

    type Query {
        categories: [CategoryOut]
        category(id: Int!): CategoryOut
    }

    type Mutation {
        createCategory(data: CategoryIn!): CategoryOut
        updateCategory(id: Int!, data: CategoryUpdate): CategoryOut 
    }

    input CategoryIn {
        name: String!
    }

    input CategoryUpdate {
        name: String
    }

    type CategoryOut {
        name: String
        id: Int
        createdAt: DateTime
    }
`

module.exports = {
    categoryTypeDefs,
}
