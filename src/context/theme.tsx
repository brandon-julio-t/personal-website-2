import React, { createContext, useState, useEffect } from "react"

interface ThemeContextProviderProps {
  children: React.ReactNode
}

const defaultValue = { mode: null, toggleTheme: () => null }
const ThemeContext = createContext(defaultValue)

let Particles = null

const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    Particles = require("particlesjs")

    const savedTheme = localStorage.getItem("theme")
    const noThemeIsSaved = !savedTheme

    if (noThemeIsSaved) {
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches
      const themeByPreference = prefersDark ? "dark" : "light"

      setTheme(themeByPreference)
      localStorage.setItem("theme", themeByPreference)
      initParticlesJS()
    } else {
      setTheme(savedTheme)
      localStorage.setItem("theme", savedTheme)
      initParticlesJS()
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

            Particles.destroy()
            restoreDeletedCanvas()
            initParticlesJS()
          }
        },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

function restoreDeletedCanvas() {
  const canvas = document.createElement("canvas")

  canvas.id = "particlesjs"
  canvas.className = "h-screen w-screen fixed top-0"
  canvas.style.zIndex = "-1"

  document.getElementById("particlesjs-container").append(canvas)
}

function initParticlesJS() {
  Particles.init({
    selector: "#particlesjs",
    connectParticles: true,
    color: colors,
    speed: 1.1,
    responsive: [
      {
        breakpoint: 2560,
        options: {
          maxParticles: 128,
        },
      },
      {
        breakpoint: 1440,
        options: {
          maxParticles: 64,
        },
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 32,
        },
      },
      {
        breakpoint: 375,
        options: {
          maxParticles: 16,
        },
      },
    ],
  })
}

export { ThemeContext as default, ThemeContextProvider }

const colors = [
  "#000000",
  "#FFFFFF",
  "#F7FAFC",
  "#EDF2F7",
  "#E2E8F0",
  "#CBD5E0",
  "#A0AEC0",
  "#718096",
  "#4A5568",
  "#2D3748",
  "#1A202C",
  "#FFF5F5",
  "#FED7D7",
  "#FEB2B2",
  "#FC8181",
  "#F56565",
  "#E53E3E",
  "#C53030",
  "#9B2C2C",
  "#742A2A",
  "#FFFAF0",
  "#FEEBC8",
  "#FBD38D",
  "#F6AD55",
  "#ED8936",
  "#DD6B20",
  "#C05621",
  "#9C4221",
  "#7B341E",
  "#FFFFF0",
  "#FEFCBF",
  "#FAF089",
  "#F6E05E",
  "#ECC94B",
  "#D69E2E",
  "#B7791F",
  "#975A16",
  "#744210",
  "#F0FFF4",
  "#C6F6D5",
  "#9AE6B4",
  "#68D391",
  "#48BB78",
  "#38A169",
  "#2F855A",
  "#276749",
  "#22543D",
  "#E6FFFA",
  "#B2F5EA",
  "#81E6D9",
  "#4FD1C5",
  "#38B2AC",
  "#319795",
  "#2C7A7B",
  "#285E61",
  "#234E52",
  "#EBF8FF",
  "#BEE3F8",
  "#90CDF4",
  "#63B3ED",
  "#4299E1",
  "#3182CE",
  "#2B6CB0",
  "#2C5282",
  "#2A4365",
  "#EBF4FF",
  "#C3DAFE",
  "#A3BFFA",
  "#7F9CF5",
  "#667EEA",
  "#5A67D8",
  "#4C51BF",
  "#434190",
  "#3C366B",
  "#FAF5FF",
  "#E9D8FD",
  "#D6BCFA",
  "#B794F4",
  "#9F7AEA",
  "#805AD5",
  "#6B46C1",
  "#553C9A",
  "#44337A",
  "#FFF5F7",
  "#FED7E2",
  "#FBB6CE",
  "#F687B3",
  "#ED64A6",
  "#D53F8C",
  "#B83280",
  "#97266D",
  "#702459",
]
