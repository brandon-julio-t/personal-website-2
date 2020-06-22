import Icon from "@mdi/react"
import React, { useContext } from "react"
import { mdiBrightness3, mdiBrightness7 } from "@mdi/js"

import ThemeContext from "../context/theme"

import Button from "../components/common/button"

interface HeaderProps {
  title: string
}

export default (props: HeaderProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="my-5">
      <h1 className="font-hairline tracking-wide text-6xl text-center">
        {props.title}
      </h1>

      <div className="flex flex-row justify-center">
        <Button onClick={toggleTheme} isIcon={true}>
          <Icon
            className="h-10 fill-current transition duration-300"
            path={theme === "light" ? mdiBrightness3 : mdiBrightness7}
            title="Toggle theme button"
          />
        </Button>
      </div>
    </header>
  )
}
