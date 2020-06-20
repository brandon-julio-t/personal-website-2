import React, { useContext, useLayoutEffect } from "react"
import loadable from "@loadable/component"

import PageContext from "../context/page"

const Button = loadable(() => import("../components/common/button"))

export default () => {
  const { setTitle } = useContext(PageContext)

  useLayoutEffect(() => {
    setTitle("404 Not Found")
  }, [])

  return (
    <div className="flex flex-row justify-center">
      <Button className="text-4xl" isIcon={false} to="/">
        Return to Home
      </Button>
    </div>
  )
}
