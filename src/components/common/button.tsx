import React, { useContext } from "react"
import { Link } from "gatsby"

import ThemeContext from "../../context/theme"

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
  const isLight = useContext(ThemeContext).theme === "light"

  const base = `
    ${isLight ? "bg-white" : "bg-black"}
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
    transition
  `

  const { children, className, href, isIcon, onClick, to, type } = props
  const style = isIcon ? className : `${base} ${className ?? ""}`

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
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
