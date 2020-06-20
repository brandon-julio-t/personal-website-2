import React, { createContext, useState, useLayoutEffect } from "react"

interface PageContextProviderProps {
  children: React.ReactNode
}

const PageContext = createContext({
  theme: "dark",
  toggleTheme: () => null,

  title: "Home",
  setTitle: (title: string) => null,
})

const PageContextProvider = (props: PageContextProviderProps) => {
  const [theme, setTheme] = useState("dark")
  const [title, setTitle] = useState("Home")

  useLayoutEffect(() => {
    require("particles.js")

    const savedTheme = localStorage.getItem("theme")
    const noThemeIsSaved = !savedTheme

    if (noThemeIsSaved) {
      const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches
      const themeByPreference = prefersDark ? "dark" : "light"

      setTheme(themeByPreference)
      localStorage.setItem("theme", themeByPreference)
      initParticlesJS(themeByPreference)
    } else {
      setTheme(savedTheme)
      localStorage.setItem("theme", savedTheme)
      initParticlesJS(savedTheme)
    }
  }, [])

  return (
    <PageContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          const toggledTheme = theme === "dark" ? "light" : "dark"
          setTheme(toggledTheme)

          if (typeof window !== `undefined`) {
            localStorage.setItem("theme", toggledTheme)
            clearParticles()
            initParticlesJS(toggledTheme)
          }
        },

        title,
        setTitle: (title: string) => setTitle(title),
      }}
    >
      {props.children}
    </PageContext.Provider>
  )
}

export { PageContext as default, PageContextProvider }

function initParticlesJS(theme: string) {
  // @ts-ignore
  particlesJS("particles-js", paramsByTheme({ isLight: theme === "light" }))
}

function clearParticles() {
  // @ts-ignore
  pJSDom.forEach(({ pJS }) => pJS.fn.vendors.destroypJS())
  // @ts-ignore
  pJSDom = []
}

const paramsByTheme = ({ isLight }) => {
  return {
    particles: {
      number: {
        value: 16,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: isLight ? "#000000" : "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: isLight ? "#000000" : "#ffffff",
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
        color: isLight ? "#000000" : "#ffffff",
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
          enable: false,
          mode: "grab",
        },
        onclick: {
          enable: false,
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
