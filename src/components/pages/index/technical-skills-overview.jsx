import "twin.macro"

import loadable from "@loadable/component"

import {
  mdiDatabase,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLaravel,
  mdiReact,
  mdiVuejs,
} from "@mdi/js"

const Icon = loadable(() => import("@mdi/react"))
const React = loadable(() => import("react"))

const Button = loadable(() => import("./components/button"))
const Card = loadable(() => import("./components/card"))
const H3 = loadable(() => import("./components/h3"))
const Section = loadable(() => import("./components/section"))
const SectionHeader = loadable(() => import("./components/section-header"))

export default () => (
  <Section>
    <SectionHeader>Technical Skills Overview</SectionHeader>

    <div tw="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill, idx) => (
        <Card key={idx}>
          <H3>{skill.label}</H3>

          <ul>
            {skill.items.map((item, idx) => (
              <li key={idx} tw="flex flex-row items-center my-4">
                <Icon
                  path={item.icon}
                  title={`${item.label} Logo`}
                  tw="inline-block h-6 mr-4"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>

    <Button to="/skills" tw="flex flex-row justify-center my-5">
      View More
      <span role="img" aria-label="Eyes emoji">
        👀
      </span>
    </Button>
  </Section>
)

const skills = [
  {
    label: "Programming Languages",
    items: [
      {
        icon: mdiLanguageJava,
        label: "Java",
      },
      {
        icon: mdiLanguageJavascript,
        label: "JavaScript",
      },
      {
        icon: mdiDatabase,
        label: "SQL",
      },
    ],
  },
  {
    label: "Framework",
    items: [
      {
        icon: mdiLaravel,
        label: "Laravel",
      },
      {
        icon: mdiReact,
        label: "React",
      },
      {
        icon: mdiVuejs,
        label: "Vue",
      },
    ],
  },
]
