import * as React from "react"
import tw from "twin.macro"

import {
  mdiDatabase,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLaravel,
  mdiReact,
  mdiVuejs,
} from "@mdi/js"
import Icon from "@mdi/react"

import { Button, Card, Layout } from "../components/index"

export default function IndexRoute() {
  return (
    <Layout title="Home">
      <Section tw="text-center">
        <p>Lifelong Learner | Web Developer</p>
        <p>Since 2019</p>
      </Section>

      <Section>
        <H2>Technical Skills Overview</H2>

        <div tw="grid grid-cols-2 gap-5">
          {skills.map((skill, idx) => (
            <Card key={idx}>
              <H3>{skill.label}</H3>

              {skill.items.map((item, idx) => (
                <li key={idx} tw="flex flex-row items-center my-4">
                  <Icon tw="inline-block h-6 mr-4" path={item.icon} />
                  {item.label}
                </li>
              ))}
            </Card>
          ))}
        </div>

        <Button to="/skills">View More</Button>
      </Section>
    </Layout>
  )
}

const H2 = tw.h2`text-center text-4xl`
const H3 = tw.h3`text-2xl`
const Section = tw.section`my-5`

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
