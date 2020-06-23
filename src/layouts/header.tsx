import React, { useContext } from "react"

import ToggleButtomTheme from "./toggle-theme-button"

interface HeaderProps {
  title: string
}

export default (props: HeaderProps) => (
  <header className="my-5">
    <h1 className="font-hairline tracking-wide text-6xl text-center">
      {props.title}
    </h1>

    <div className="flex flex-row justify-center">
      <ToggleButtomTheme />
    </div>
  </header>
)
