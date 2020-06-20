import React, { useContext, useLayoutEffect } from "react"

import PageContext from "../context/page"

import Databases from "../components/pages/skills/databases"
import Frameworks from "../components/pages/skills/frameworks"
import Languages from "../components/pages/skills/languages"
import Others from "../components/pages/skills/others"

export default () => {
  const { setTitle } = useContext(PageContext)

  useLayoutEffect(() => {
    setTitle("Technical Skills")
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Languages />
      <Frameworks />
      <Databases />
      <Others />
    </div>
  )
}
