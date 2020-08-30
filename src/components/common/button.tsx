import React from "react"
import { Link } from "gatsby"

interface ButtonProps {
  ariaLabel?: string
  children: React.ReactNode
  className?: string
  href?: string
  isIcon: boolean
  onClick?: React.MouseEventHandler
  to?: string
  type?: "button" | "submit" | "reset"
}

export default (props: ButtonProps) => {
  const { href, to } = props

  if (to) return <InternalLink {...props} />
  if (href) return <ExternalLink {...props} />
  return <RegularButton {...props} />
}

const base = `
  active:bg-gray-100
  active:shadow-lg
  border
  border-gray-500
  duration-300
  focus:shadow-lg
  hover:border-current
  hover:shadow-md
  px-3
  py-2
  rounded
  shadow
  transition-border
  transition-shadow
`

function styleByIsIconFlag(props: ButtonProps) {
  const { className, isIcon } = props
  return isIcon ? className : `${base} ${className ?? ""}`
}

function InternalLink(props: any) {
  const { ariaLabel, children, to } = props
  const style = styleByIsIconFlag(props)

  return (
    <Link aria-label={ariaLabel} className={style} to={to}>
      {children}
    </Link>
  )
}

function ExternalLink(props: any) {
  const { ariaLabel, children, href } = props
  const style = styleByIsIconFlag(props)

  return (
    <a
      aria-label={ariaLabel}
      className={style}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  )
}

function RegularButton(props: any) {
  const { ariaLabel, children, onClick, type } = props
  const style = styleByIsIconFlag(props)

  return (
    <button
      aria-label={ariaLabel}
      className={style}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
