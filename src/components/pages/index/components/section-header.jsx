import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

export default props => <h2 tw="text-center text-4xl my-4" {...props}>{props.children}</h2>
