import React from "react"
import loadable from "@loadable/component"

const SkillSection = loadable(() => import("./components/skill-section"))

export default () => <SkillSection title="Frameworks" skillCategories={frameworks} />

const frameworks = [
  {
    title: "Frontend",
    items: ["Bootstrap", "Vue", "Vuetify", "Nuxt", "Gatsby", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Express", "Laravel"],
  },
]
