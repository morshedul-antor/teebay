const categoryTypeDefs = `
    scalar DateTime

    type Query {
        categories: [CategoryOut]
        category(id: Int!): CategoryOut
    }

    type Mutation {
        categoryCreate(data: CategoryIn!): CategoryOut
        categoryUpdate(id: Int!, data: CategoryUpdate): CategoryOut 
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
