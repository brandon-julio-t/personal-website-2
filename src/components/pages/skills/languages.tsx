import React from "react"
import loadable from "@loadable/component"

const SkillSection = loadable(() => import("./components/skill-section"))

export default () => (
  <SkillSection title="Languages" skillCategories={languages} />
)

const languages = [
  {
    title: "Programming",
    items: ["C/C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Spoken",
    items: ["Indonesia (Native)", "English"],
  },
  {
    title: "Others",
    items: ["HTML", "Markdown", "SQL"],
  },
]
