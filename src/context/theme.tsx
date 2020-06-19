import React, { createContext, useState, useEffect } from "react"

const defaultValue = { mode: "light", toggleTheme: () => null }

const ThemeContext = createContext(defaultValue)

const ThemeContextProvider = props => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (typeof window !== `undefined`) {
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
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        mode: theme,
        toggleTheme: () => {
          const toggledTheme = theme === "dark" ? "light" : "dark"

          setTheme(toggledTheme)

          if (typeof window !== `undefined`) {
            localStorage.setItem("theme", toggledTheme)
          }
        },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext as default, ThemeContextProvider }
