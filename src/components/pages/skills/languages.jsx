import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

const H2 = loadable(() => import("./components/h2"))
const H3 = loadable(() => import("./components/h3"))

export default () => (
  <section>
    <H2>Languages</H2>

    <ul tw="ml-4">
      {languages.map((lang, idx) => (
        <li key={idx} tw="my-2">
          <H3>{lang.title}</H3>

          <hr tw="my-2" />

          <ul tw="ml-4 list-disc">
            {lang.items.sort().map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
)

const languages = [
  {
    title: "Programming",
    items: ["C/C++", "Java", "JavaScript"],
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
