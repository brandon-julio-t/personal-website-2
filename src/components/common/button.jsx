import tw from "twin.macro"

import React from "react"
import { Link } from "gatsby"

export default (props) => {
  const { href, to } = props

  if (to) return <GatsbyLink to={`${to}`} {...props} />
  if (href) return <RegularLink href={`${href}`} {...props} />
  return <RegularButton {...props} />
}

const base = `
active:scale-95
bg-black
border
border-black
duration-300
hover:bg-white
hover:text-black
px-3
py-2
rounded
text-white
transform
transition
`

const GatsbyLink = tw(Link)`${base}`
const RegularLink = tw.a`${base}`
const RegularButton = tw.button`${base}`
