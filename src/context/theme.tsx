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

  useLayoutEffect(initThemeFromLocalStorage(setTheme), [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme() {
          const toggledTheme = theme === "dark" ? "light" : "dark"
          setTheme(toggledTheme)

          if (window)
            localStorage.setItem("theme", toggledTheme)
        },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext as default, ThemeContextProvider }

function initThemeFromLocalStorage(
  setTheme: React.Dispatch<React.SetStateAction<string>>
): React.EffectCallback {
  return () => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches
      const themeByPreference = prefersDark ? "dark" : "light"

      setTheme(themeByPreference)
      localStorage.setItem("theme", themeByPreference)
    }
  }
}
