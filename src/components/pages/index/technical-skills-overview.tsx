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

const Button = loadable(() => import("../../common/button"))
const Card = loadable(() => import("./components/card"))
const H3 = loadable(() => import("./components/h3"))
const IndexSection = loadable(() => import("./components/index-section"))

export default () => (
  <IndexSection title="Technical Skills Overview">
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
      <span aria-label="Eyes emoji" role="img">
        👀
      </span>
    </Button>
  </IndexSection>
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
