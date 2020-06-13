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
  const { children, className, href, isIcon, to } = props
  const style = isIcon ? className : `${base} ${className}`

  if (to)
    return (
      <Link aria-label={props.ariaLabel} className={style} to={to}>
        {children}
      </Link>
    )

  if (href)
    return (
      <a
        aria-label={props.ariaLabel}
        className={style}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )

  return (
    <button
      aria-label={props.ariaLabel}
      className={style}
    >
      {children}
    </button>
  )
}

const base =
  "active:bg-gray-100 active:shadow-lg focus:shadow-lg border duration-300 hover:border-gray-500 hover:shadow-md px-3 py-2 rounded shadow transition"
