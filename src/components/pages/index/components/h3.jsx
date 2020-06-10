import "twin.macro"

import React from "react"

export default props => (
  <h3 tw="text-2xl" {...props}>
    {props.children}
  </h3>
)
