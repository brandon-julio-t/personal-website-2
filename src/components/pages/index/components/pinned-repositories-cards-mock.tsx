import React from "react"

import Card from "./card"

export default () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
    <Card className="bg-gray-300 h-64" />
  </div>
)
