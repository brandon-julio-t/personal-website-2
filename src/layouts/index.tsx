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
  const { title } = props

  return (
    <ThemeContextProvider>
      <SEO title={title} />

      <Body {...props} />
    </ThemeContextProvider>
  )
}

function Body(props: any) {
  const { background, children, title } = props

  if (background) return children

  return (
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
  )
}
