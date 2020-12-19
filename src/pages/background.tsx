import * as React from "react"

import Layout from "../layouts"
import ToggleThemeButton from "../layouts/toggle-theme-button"

export default () => (
  <Layout background={true} title="Particles Background">
    <div className="h-screen w-screen flex flex-row justify-center items-center">
      <div className="p-8 rounded-lg blur m-0">
        <ToggleThemeButton />
      </div>
    </div>
  </Layout>
)
