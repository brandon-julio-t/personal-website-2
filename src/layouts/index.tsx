import React from "react"
import loadable from "@loadable/component"

import { PageContextProvider } from "../context/page"
import { ThemeContextProvider } from "../context/theme"

const Footer = loadable(() => import("./footer"))
const Header = loadable(() => import("./header"))
const Navbar = loadable(() => import("./navbar"))
const SEO = loadable(() => import("./seo"))

interface LayoutProps {
  children: React.ReactNode
}

export default (props: LayoutProps) => (
  <ThemeContextProvider>
    <PageContextProvider>
      <SEO />
      <Navbar />
      {/* <Header /> */}
      <main className="container mx-auto px-4">
        <hr className="my-4" />
        {props.children}
        <hr className="my-4" />
      </main>
      {/* <Footer /> */}
    </PageContextProvider>
  </ThemeContextProvider>
)
