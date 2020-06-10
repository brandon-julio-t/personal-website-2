import "twin.macro"

import React from "react"

import { H2 } from "./components"

export default () => (
  <section>
    <H2>Databases</H2>

    <ul tw="ml-4 list-disc">
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
