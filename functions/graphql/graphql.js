const { ApolloServer } = require("apollo-server-lambda")

const GitHubAPI = require("./data-sources/github-api")
const resolvers = require("./resolvers")
const typeDefs = require("./type-defs")

exports.handler = new ApolloServer({
  typeDefs,
  resolvers,

  context: ({ event, context }) => ({
    event,
    context,
    token: process.env.GITHUB_GRAPHQL_API_TOKEN,
  }),

  dataSources: () => ({
    gitHubAPI: new GitHubAPI(),
  }),
}).createHandler()
