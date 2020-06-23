import React, { useContext } from "react"

import ThemeContext from "../context/theme"

import Layout from "../layouts"
import ToggleThemeButton from "../layouts/toggle-theme-button"

export default () => {
  const isLight = useContext(ThemeContext).theme === "light"

  return (
    <Layout background={true} title="Particles Background">
      <div className="h-screen w-screen flex flex-row justify-center items-center">
        <div
          className={`p-8 rounded-lg ${isLight ? "blur-light" : "blur-dark"}`}
        >
          <ToggleThemeButton />
        </div>
      </div>
    </Layout>
  )
}
