import React, { useContext } from "react"

import ThemeContext from "../context/theme"

interface BlurContainerProps {
  children: React.ReactNode
}

export default (props: BlurContainerProps) => (
  <div className={`container mx-auto px-4 blur rounded-lg`}>
    {props.children}
  </div>
)
