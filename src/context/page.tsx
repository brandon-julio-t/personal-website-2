import React, { createContext, useState } from "react"

interface PageContextProviderProps {
  children: React.ReactNode
}

const defaultValue = { title: null, setTitle: (title: string) => null }
const PageContext = createContext(defaultValue)

const PageContextProvider = (props: PageContextProviderProps) => {
  const [pageTitle, setPageTitle] = useState(null)

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
