import PropTypes from "prop-types"
import loadable from "@loadable/component"
import tw from "twin.macro"
import { Link } from "gatsby"

const React = loadable(() => import("react"))

export default function Button(props) {
  const { href, to } = props

  if (to) return <GatsbyLink to={`${to}`} {...props} />

  if (href)
    return (
      <RegularLink
        href={`${href}`}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      />
    )

  return <RegularButton {...props} />
}

const base = `
bg-black
px-3
py-2
rounded
text-white
`

const GatsbyLink = tw(Link)`${base}`
const RegularLink = tw.a`${base}`
const RegularButton = tw.button`${base}`

Button.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string
}
