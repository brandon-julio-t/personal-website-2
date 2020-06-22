import React, { createContext, useState, useLayoutEffect } from "react"

interface ThemeContextProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => null,
})

const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState("dark")

  useLayoutEffect(() => {
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
    <ThemeContext.Provider
      value={{
        theme,
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
