import React, { useContext } from "react"

import ThemeContext from "../../../../context/theme"

interface CardProps {
  children?: React.ReactNode
  className?: string
}

export default (props: CardProps) => {
  const isLight = useContext(ThemeContext).theme === "light"

  return (
    <div
      className={`border rounded transition duration-300 shadow hover:shadow-md p-5 ${
        props.className
      } ${isLight ? "bg-white" : "bg-black"}`}
    >
      {props.children}
    </div>
  )
}
