import PropTypes from "prop-types"
import loadable from "@loadable/component"
import tw from "twin.macro"
import { memo } from "react"

const React = loadable(() => import("react"))

const H2 = tw.h2`text-3xl`
const H3 = tw.h3`font-medium text-xl`

const Section = props => (
  <section>
    <H2>{props.title}</H2>

    <ul tw="ml-4">
      {props.skills.map((category, idx) => (
        <li key={idx} tw="my-2">
          <H3>{category.title}</H3>

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
)

export default memo(Section)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
}
