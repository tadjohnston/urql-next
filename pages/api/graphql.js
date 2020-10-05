import { ApolloServer } from 'apollo-server-micro'
import { serverConfig } from '@rentpath/rent-js-api'

const apolloServer = new ApolloServer(serverConfig)

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
