import Icon from "@mdi/react"
import React from "react"

import {
  mdiDatabase,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLaravel,
  mdiReact,
  mdiVuejs,
} from "@mdi/js"

import Button from "../../common/button"
import Card from "./components/card"
import IndexSection from "./components/index-section"

export default () => (
  <IndexSection title="Technical Skills Overview">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill, idx) => (
        <Card key={idx}>
          <h3 className="text-2xl">{skill.label}</h3>

          <ul>
            {skill.items.map((item, idx) => (
              <li key={idx} className="flex flex-row items-center my-4">
                <Icon
                  path={item.icon}
                  title={`${item.label} Logo`}
                  className="inline-block h-6 mr-4"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>

    <Button
      className="flex flex-row justify-center my-5"
      isIcon={false}
      to="/skills"
    >
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
