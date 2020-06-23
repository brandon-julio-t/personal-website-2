import React from "react"

import { ThemeContextProvider } from "../context/theme"

import BlurContainer from "./blur-container"
import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"
import SEO from "./seo"

interface LayoutProps {
  background?: boolean
  children: React.ReactNode
  title: string
}

export default (props: LayoutProps) => {
  const { background, children, title } = props

  return (
    <ThemeContextProvider>
      <SEO title={title} />

      {background ? (
        children
      ) : (
        <BlurContainer>
          <Navbar />
          <Header title={title} />
          <main>
            <hr className="my-4" />
            {children}
            <hr className="my-4" />
          </main>
          <Footer />
        </BlurContainer>
      )}
    </ThemeContextProvider>
  )
}
