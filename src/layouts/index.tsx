import React from "react"

import { ThemeContextProvider } from "../context/theme"

import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SEO from "./seo"

interface LayoutProps {
  children: React.ReactNode
  title: string
}

export default (props: LayoutProps) => (
  <ThemeContextProvider>
    <SEO title={props.title} />
    <Navbar />
    <Header title={props.title} />
    <main className="container mx-auto px-4">
      <hr className="my-4" />
      {props.children}
      <hr className="my-4" />
    </main>
    <Footer />

    <div
      id="particles-js"
      className="fixed top-0 h-screen w-screen"
      style={{ zIndex: -1 }}
    />
  </ThemeContextProvider>
)
