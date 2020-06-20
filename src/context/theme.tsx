import React, { createContext, useState, useLayoutEffect } from "react"

interface ThemeContextProviderProps {
  children: React.ReactNode
}

const defaultValue = { mode: null, toggleTheme: () => null }
const ThemeContext = createContext(defaultValue)

const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState(null)

  useLayoutEffect(() => {
    require("particles.js")

    const savedTheme = localStorage.getItem("theme")
    const noThemeIsSaved = !savedTheme

    if (noThemeIsSaved) {
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches
      const themeByPreference = prefersDark ? "dark" : "light"

      setTheme(themeByPreference)
      localStorage.setItem("theme", themeByPreference)
      initParticlesJS({ dark: themeByPreference === "dark" })
    } else {
      setTheme(savedTheme)
      localStorage.setItem("theme", savedTheme)
      initParticlesJS({ dark: savedTheme === "dark" })
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
            clearParticles()
            initParticlesJS({ dark: toggledTheme === "dark" })
          }
        },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext as default, ThemeContextProvider }

function initParticlesJS({ dark }) {
  particlesJS("particles-js", paramsByTheme({ dark }))
}

function clearParticles() {
  pJSDom.forEach(p => p.pJS.fn.vendors.destroypJS())
  pJSDom = []
}

const paramsByTheme = ({ dark }) => {
  return {
    particles: {
      number: {
        value: 32,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: dark ? "#ffffff" : "#000000",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: dark ? "#ffffff" : "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: dark ? "#ffffff" : "#000000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
}
