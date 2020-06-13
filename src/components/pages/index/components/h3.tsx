import React from "react"

interface H3Props {
  children: React.ReactNode
  className?: string
}

export default (props: H3Props) => (
  <h3 className="text-2xl" {...props}>
    {props.children}
  </h3>
)
