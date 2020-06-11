import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

const H2 = loadable(() => import("./components/h2"))
const H3 = loadable(() => import("./components/h3"))

export default () => (
  <section>
    <H2>Others</H2>

    <ul tw="ml-4">
      {others.map((category, idx) => (
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
