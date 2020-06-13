import React from "react"
import loadable from "@loadable/component"

const SkillSection = loadable(() => import("./components/skill-section"))

export default () => <SkillSection title="Databases" skillCategories={databases} />

const databases = [
  {
    title: "NoSQL",
    items: ["FaunaDB", "MongoDB"],
  },
  {
    title: "SQL",
    items: ["MySQL", "PostgreSQL", "SQL Server", "SQLite"],
  },
]
