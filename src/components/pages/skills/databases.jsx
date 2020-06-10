import "twin.macro"

import React from "react"
import loadable from "@loadable/component"

const H2 = loadable(() => import("./components/h2"))

export default () => (
  <section>
    <H2>Databases</H2>

    <ul tw="ml-8 list-disc">
      {databases.sort().map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </section>
)

const databases = [
  "FaunaDB",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQL Server",
  "SQLite",
]
