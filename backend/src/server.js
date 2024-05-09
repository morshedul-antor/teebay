const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const { typeDefs, resolvers } = require('./graphql')

const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
dotenv.config()

const PORT = Number(process.env.PORT) || 8000

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await server.start()

    app.use(cors())
    app.use(express.json())
    app.use('/graphql', expressMiddleware(server))

    app.get('/', (req, res) => {
        res.send({ message: 'Welcome to Teebay' })
    })

    app.listen(PORT, () => {
        console.log(`🚀 Express Server ready at port: ${PORT}`)
        console.log(`🚀 Graphql Server ready at: ${PORT}/graphql`)
    })
}

startServer().catch((error) => {
    console.error('Error starting server:', error)
})
