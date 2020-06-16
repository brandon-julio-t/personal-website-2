const { gql } = require("apollo-server-lambda")

module.exports = gql`
  type Query {
    rateLimit: RateLimit!
    viewer: User!
  }

  type RateLimit {
    remaining: Int!
    resetAt: String!
  }

  type User {
    pinnedItems(first: Int!): PinnableItemConnection!
  }

  type PinnableItemConnection {
    nodes: [PinnableItem!]!
  }

  union PinnableItem = Gist | Repository

  type Gist {
    createdAt: String!
    description: String!
    homepageUrl: String!
    name: String!
    url: String!
    languages(first: Int!): LanguageConnection!
  }

  type LanguageConnection {
    nodes: [Language!]!
  }

  type Language {
    name: String!
  }

  type Repository {
    createdAt: String!
    description: String!
    homepageUrl: String!
    name: String!
    url: String!
    languages(first: Int!): LanguageConnection!
  }
`
