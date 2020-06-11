import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

const SkillSection = loadable(() => import("./components/skill-section"))

export default () => <SkillSection title="Frameworks" skills={frameworks} />

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
