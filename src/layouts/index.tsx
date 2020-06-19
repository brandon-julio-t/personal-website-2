import React, { useState, useEffect } from "react"
import loadable from "@loadable/component"

import PageContext from "../context/page"
import ThemeContext from "../context/theme"

const Footer = loadable(() => import("./footer"))
const Header = loadable(() => import("./header"))
const Navbar = loadable(() => import("./navbar"))
const SEO = loadable(() => import("./seo"))

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const [pageTitle, setPageTitle] = useState("Home")
  const [theme, setTheme] = useState(null)

  const setTitle = (title: string) => setPageTitle(title)
  const toggleTheme = () => {
    const toggledTheme = theme === "dark" ? "light" : "dark"

    setTheme(toggledTheme)
    localStorage.setItem("theme", toggledTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const noThemeIsSaved = !savedTheme

    if (noThemeIsSaved) {
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches
      const themeByPreference = prefersDark ? "dark" : "light"

      setTheme(themeByPreference)
      localStorage.setItem("theme", themeByPreference)
    } else {
      setTheme(savedTheme)
      localStorage.setItem("theme", savedTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ mode: theme, toggleTheme }}>
      <PageContext.Provider value={{ title: pageTitle, setTitle }}>
        <SEO title={pageTitle} />

        <Navbar />

        <Header />

        <main className="container mx-auto px-4">
          <hr className="my-4" />
          {props.children}
          <hr className="my-4" />
        </main>

        <Footer />
      </PageContext.Provider>
    </ThemeContext.Provider>
  )
}
