import React from "react"

import { ThemeContextProvider } from "../context/theme"

import BlurContainer from "./blur-container"
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

    <BlurContainer>
      <Navbar />
      <Header title={props.title} />
      <main>
        <hr className="my-4" />
        {props.children}
        <hr className="my-4" />
      </main>
      <Footer />
    </BlurContainer>
  </ThemeContextProvider>
)
