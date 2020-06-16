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
