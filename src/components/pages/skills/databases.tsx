import * as React from "React"

import SkillSection from "./components/skill-section"

export default () => (
  <SkillSection title="Databases" skillCategories={databases} />
)

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
