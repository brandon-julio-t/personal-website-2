import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

export default props => <h2 tw="text-2xl">{props.children}</h2>
