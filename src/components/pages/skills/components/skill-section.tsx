import React from "react"

interface SkillItems {
  title: string
  items: string[]
}

interface SkillSectionProps {
  title: string
  skillCategories: SkillItems[]
}

export default (props: SkillSectionProps) => (
  <section>
    <h2 className="text-3xl">{props.title}</h2>

    <ul className="ml-4">
      {props.skillCategories.map((category, idx) => (
        <li key={idx} className="my-2">
          <h3 className="font-medium text-xl">{category.title}</h3>

          <hr className="my-2" />

          <ul className="ml-6 list-disc">
            {category.items.sort().map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
)
