import React, { useContext } from "react"

import PageContext from "../../../../context/page"

interface CardProps {
  children?: React.ReactNode
  className?: string
}

export default (props: CardProps) => {
  const isLight = useContext(PageContext).theme === "light"

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
