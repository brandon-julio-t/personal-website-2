const { GraphQLDataSource } = require("apollo-datasource-graphql")
const { gql } = require("apollo-server-lambda")

module.exports = class GitHubGraphQLAPI extends GraphQLDataSource {
  constructor() {
    super()
    this.baseURL = "https://api.github.com/graphql"
  }

  willSendRequest(request) {
    const { token } = this.context

    if (!request.headers) {
      request.headers = {}
    }

    request.headers.authorization = `bearer ${token}`
  }

  getRateLimit = async () => {
    const response = await this.query(gql`
      query {
        rateLimit {
          remaining
          resetAt
        }
      }
    `)

    return response.data.rateLimit
  }

  getViewer = async args => {
    const { pinnedItemsLimit, repositoryLanguageLimit } = args
    const response = await this.query(
      gql`
        query($pinnedItemsLimit: Int!, $repositoryLanguageLimit: Int!) {
          viewer {
            pinnedItems(first: $pinnedItemsLimit) {
              nodes {
                ... on Repository {
                  createdAt
                  description
                  homepageUrl
                  name
                  url
                  languages(first: $repositoryLanguageLimit) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      `,
      { variables: { pinnedItemsLimit, repositoryLanguageLimit } }
    )

    return response.data.viewer
  }
}
