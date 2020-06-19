import React, { createContext, useState } from "react"

const defaultValue = { title: "Home", setTitle: (title: string) => null }

const PageContext = createContext(defaultValue)

const PageContextProvider = props => {
  const [pageTitle, setPageTitle] = useState("Home")

  return (
    <PageContext.Provider
      value={{
        title: pageTitle,
        setTitle: (title: string) => setPageTitle(title),
      }}
    >
      {props.children}
    </PageContext.Provider>
  )
}

export { PageContext as default, PageContextProvider }
