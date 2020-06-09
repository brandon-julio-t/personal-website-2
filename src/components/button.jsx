import tw from "twin.macro"

import React from "react"
import { Link } from "gatsby"

export default function (props) {
  const { children, href, to } = props

  if (to) return <GatsbyLink to={`${to}`}>{children}</GatsbyLink>
  if (href) return <RegularLink href={`${href}`}>{children}</RegularLink>
  return <RegularButton>{children}</RegularButton>
}

const base = `
border
border-black
`

const GatsbyLink = tw(Link)`${base}`
const RegularLink = tw.a`${base}`
const RegularButton = tw.button`${base}`
