/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import ApolloClient from "apollo-boost"
import React from "react"
import fetch from "isomorphic-fetch"
import { ApolloProvider } from "@apollo/react-hooks"

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql",
  fetch,
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
