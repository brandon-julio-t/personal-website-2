import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

const SkillSection = loadable(() => import("./components/skill-section"))

export default () => <SkillSection title="Databases" skills={databases} />

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
