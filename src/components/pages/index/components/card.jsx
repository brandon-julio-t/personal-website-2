import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

export default props => (
  <div
    tw="border transition duration-300 shadow-md hover:shadow-lg p-5"
    {...props}
  />
)
