import PropTypes from "prop-types"
import tw from "twin.macro"
import { Link } from "gatsby"

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
border
duration-300
hover:border-gray-500
hover:shadow-md
px-3
py-2
rounded
shadow
transition
`

// @ts-ignore
const GatsbyLink = tw(Link)`${base}`
const RegularLink = tw.a`${base}`
const RegularButton = tw.button`${base}`

Button.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string,
}
