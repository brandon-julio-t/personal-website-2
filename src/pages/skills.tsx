import React, { useContext, useEffect } from "react"
import loadable from "@loadable/component"

import PageContext from "../context/page"

const Databases = loadable(() => import("../components/pages/skills/databases"))
const Frameworks = loadable(() =>
  import("../components/pages/skills/frameworks")
)
const Languages = loadable(() => import("../components/pages/skills/languages"))
const Others = loadable(() => import("../components/pages/skills/others"))

export default () => {
  useContext(PageContext).setTitle("Technical Skills")

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Languages />
      <Frameworks />
      <Databases />
      <Others />
    </div>
  )
}
