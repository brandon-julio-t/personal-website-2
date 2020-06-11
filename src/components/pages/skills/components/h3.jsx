import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

export default props => <h3 tw="font-medium text-xl">{props.children}</h3>
