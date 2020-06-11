import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

export default props => (
  <h3 tw="text-2xl" {...props}>
    {props.children}
  </h3>
)
