import "twin.macro"

import React from "react"

export default props => (
  <h2 tw="text-4xl" {...props}>
    {props.children}
  </h2>
)
