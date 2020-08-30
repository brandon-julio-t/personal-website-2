/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/index.css"

window.onload = async () => {
  const Particles = await import("./src/layouts/Particles/index")

  Particles.default.init({ showFPS: process.env.NODE_ENV === `development` })
}
