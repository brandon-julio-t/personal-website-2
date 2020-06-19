import ApolloClient from "apollo-boost"
import React, { useEffect, useContext } from "react"
import fetch from "isomorphic-fetch"
import loadable from "@loadable/component"
import { ApolloProvider } from "@apollo/react-hooks"

import { PageContextProvider } from "../context/page"
import { ThemeContextProvider } from "../context/theme"

const Footer = loadable(() => import("./footer"))
const Header = loadable(() => import("./header"))
const Navbar = loadable(() => import("./navbar"))
const SEO = loadable(() => import("./seo"))

interface LayoutProps {
  children: React.ReactNode
}

export default (props: LayoutProps) => {
  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
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

          <div id="particlesjs-container">
            <canvas
              id="particlesjs"
              className="h-screen w-screen fixed top-0"
              style={{ zIndex: -1 }}
            />
          </div>
        </PageContextProvider>
      </ThemeContextProvider>
    </ApolloProvider>
  )
}

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql",
  fetch,
})
