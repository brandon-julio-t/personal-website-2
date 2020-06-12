import tw from "twin.macro"
import { Link } from "gatsby"

interface ButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  isIcon: boolean
  onClick?: React.MouseEventHandler
  to?: string
  type?: "button" | "submit" | "reset"
}

export default (props: ButtonProps) => {
  const { children, href, isIcon, to } = props

  if (to) return <GatsbyLink to={to} {...props} />

  if (isIcon && href)
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" className={props.className}>
        {children}
      </a>
    )

  if (href)
    return (
      <RegularLink
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      />
    )

  return <RegularButton {...props} />
}

const base = `
active:bg-gray-100
active:shadow-lg
focus:shadow-lg
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

// @ts-ignore: this works
const GatsbyLink = tw(Link)`${base}`
const RegularLink = tw.a`${base}`
const RegularButton = tw.button`${base}`
