import "twin.macro"

import { memo } from "react"

interface SkillItems {
  title: string
  items: string[]
}

interface SkillSectionProps {
  title: string
  skillCategories: SkillItems[]
}

export default memo((props: SkillSectionProps) => (
  <section>
    <h2 tw="text-3xl">{props.title}</h2>

    <ul tw="ml-4">
      {props.skillCategories.map((category, idx) => (
        <li key={idx} tw="my-2">
          <h3 tw="font-medium text-xl">{category.title}</h3>

          <hr tw="my-2" />

          <ul tw="ml-6 list-disc">
            {category.items.sort().map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
))
