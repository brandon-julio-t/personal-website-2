import tw from "twin.macro"

import React from "react"
import { Link } from "gatsby"

export default props => {
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
