import Icon from "@mdi/react"
import React, { useContext } from "react"
import { mdiBrightness3, mdiBrightness7 } from "@mdi/js"

import ThemeContext from "../context/theme"

import Button from "../components/common/button"

export default () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Button onClick={toggleTheme} isIcon={true}>
      <Icon
        className="h-10 fill-current transition duration-300"
        path={theme === "light" ? mdiBrightness3 : mdiBrightness7}
        title="Toggle theme button"
      />
    </Button>
  )
}
