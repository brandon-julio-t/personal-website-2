import React from "react"
import loadable from "@loadable/component"

const Card = loadable(() => import("./card"))

interface LimitExceededProps {
  message: string
}

export default (props: LimitExceededProps) => (
  <Card className="max-w-xs mx-auto">
    <p className="text-center">
      {props.message}
      <span role="img" aria-label="sad face">
        😥
      </span>
      <br />
      Please come by another day.
    </p>
  </Card>
)
