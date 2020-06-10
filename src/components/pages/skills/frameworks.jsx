import "twin.macro"

import React from "react"

import { H2, H3 } from "./components"

export default () => (
  <section>
    <H2>Frameworks</H2>

    <ul tw="ml-4">
      {frameworks.map((category, idx) => (
        <li key={idx} tw="my-2">
          <H3>{category.title}</H3>

          <hr tw="my-2" />

          <ul tw="ml-4 list-disc">
            {category.items.sort().map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
)

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
