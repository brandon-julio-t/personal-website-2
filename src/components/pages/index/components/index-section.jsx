import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

export default props => (
  <section tw="my-5">
    <h2 tw="text-center text-4xl my-4">
      {props.title}
    </h2>

    {props.children}
  </section>
)
