import Icon from "@mdi/react"
import React, { useContext } from "react"
import { mdiBrightness3, mdiBrightness7 } from "@mdi/js"

import PageContext from "../context/page"

import Button from "../components/common/button"

export default () => {
  const { title, theme, toggleTheme } = useContext(PageContext)

  return (
    <header className="my-5">
      <h1 className="font-hairline tracking-wide text-6xl text-center">
        {title}
      </h1>

      <div className="flex flex-row justify-center">
        <Button onClick={toggleTheme} isIcon={true}>
          <Icon
            className="h-10 fill-current"
            path={theme === "light" ? mdiBrightness3 : mdiBrightness7}
            title="Toggle theme button"
          />
        </Button>
      </div>
    </header>
  )
}
