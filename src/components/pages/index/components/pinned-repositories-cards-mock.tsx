import React, { useContext } from "react"
import loadable from "@loadable/component"

const Card = loadable(() => import("./card"))

export default () => (
  <>
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
  </>
)
