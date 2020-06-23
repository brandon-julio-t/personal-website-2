import React, { useContext } from "react"

import ThemeContext from "../context/theme"

interface BlurContainerProps {
  children: React.ReactNode
}

export default (props: BlurContainerProps) => {
  const isLight = useContext(ThemeContext).theme === "light"

  return (
    <div
      className={`container mx-auto px-4 ${
        isLight ? "blur-light" : "blur-dark"
      }`}
    >
      {props.children}
    </div>
  )
}
