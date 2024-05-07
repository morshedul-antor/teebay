const userTypeDefs = `
  type Query {
    users: [UserOut]
    user(id:Int!): UserOut
  }

  type Mutation {
    createUser(data: UserIn!): UserOut
    updateUser(id: Int!, data: UserUpdate): UserOut

    login(data: Login!): Token
  }

  input UserIn {
    firstName: String
    lastName: String
    email: String
    phone: String
    address: String
    password: String
  }

  input UserUpdate {
    firstName: String
    lastName: String
    email: String
    phone: String
    address: String
  }

  type UserOut {
    id: Int
    firstName: String
    lastName: String
    email: String
    phone: String
    address: String
    password: String
  }

  input Login {
    identifier: String
    password: String
  }

  type Token {
    type: String
    token: String
  }
`

module.exports = {
    userTypeDefs,
}
