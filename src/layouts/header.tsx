import React, { useContext } from "react"
import loadable from "@loadable/component"
import { mdiBrightness3, mdiBrightness7 } from "@mdi/js"

import PageContext from "../context/page"
import ThemeContext from "../context/theme"

const Icon = loadable(() => import("@mdi/react"))

const Button = loadable(() => import("../components/common/button"))

export default () => {
  const page = useContext(PageContext)
  const theme = useContext(ThemeContext)

  return (
    <header className="my-5">
      <h1 className="font-hairline tracking-wide text-6xl text-center">
        {page.title}
      </h1>

      <div className="flex flex-row justify-center">
        <Button onClick={theme.toggleTheme} isIcon={true}>
          <Icon
            className="h-10 fill-current"
            path={theme.mode === "light" ? mdiBrightness3 : mdiBrightness7}
            title="Toggle theme button"
          />
        </Button>
      </div>
    </header>
  )
}
