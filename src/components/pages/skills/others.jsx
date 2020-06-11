import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

const SkillSection = loadable(() => import("./components/skill-section"))

export default () => <SkillSection title="Others" skills={others} />

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
