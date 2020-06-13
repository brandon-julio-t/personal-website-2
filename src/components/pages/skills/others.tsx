import React from "react"
import loadable from "@loadable/component"

const SkillSection = loadable(() => import("./components/skill-section"))

export default () => <SkillSection title="Others" skillCategories={others} />

const others = [
  {
    title: "Cloud",
    items: ["Heroku", "Netlify"],
  },
  {
    title: "IDE",
    items: ["Jetbrains IDEs", "Visual Studio Code"],
  },
  {
    title: "Etc.",
    items: ["Basecamp", "Microsoft Office 365", "Microsoft Teams"],
  },
]
