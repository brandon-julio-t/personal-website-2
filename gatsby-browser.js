/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/layouts/particles"
import "./src/styles/index.css"

export const onRouteUpdate = () => {
  const { innerWidth, pJSDom, particlesJS } = window

  pJSDom.forEach(({ pJS }) => pJS.fn.vendors.destroypJS())

  const lg = innerWidth >= 1024
  const md = innerWidth >= 768
  // @ts-ignore
  particlesJS("particles-js", {
    particles: {
      number: {
        value: lg ? 32 : md ? 16 : 8,
        density: {
          enable: false,
          value_area: 800,
        },
      },
      color: {
        value: [
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
        ],
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ffffff",
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
        value: 1,
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
        distance: 256,
        color: "#ffffff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: true,
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
  })
}
