import ApolloClient from "apollo-boost"
import React from "react"
import fetch from "isomorphic-fetch"
import { ApolloProvider } from "@apollo/react-hooks"

import { PageContextProvider } from "../context/page"

import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SEO from "./seo"

interface LayoutProps {
  children: React.ReactNode
}

export default (props: LayoutProps) => {
  return (
    <ApolloProvider client={client}>
      <PageContextProvider>
        <SEO />
        <Navbar />
        <Header />
        <main className="container mx-auto px-4">
          <hr className="my-4" />
          {props.children}
          <hr className="my-4" />
        </main>
        <Footer />

        <div
          id="particles-js"
          className="fixed top-0 h-screen w-screen z-0"
          style={{ zIndex: -1 }}
        />
      </PageContextProvider>
    </ApolloProvider>
  )
}

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql",
  fetch,
})
