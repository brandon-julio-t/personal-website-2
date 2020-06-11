import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

export default props => <section tw="my-5" {...props} />
