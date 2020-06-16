import React from "react"
import loadable from "@loadable/component"

const Card = loadable(() => import("./card"))
const Button = loadable(() => import("../../../common/button"))

interface APIErrorProps {
  message: string
}

export default (props: APIErrorProps) => (
  <Card className="max-w-xs mx-auto">
    <p className="text-center">
      {props.message}
      <span role="img" aria-label="sad face emoji">
        😥
      </span>
    </p>

    <div className="flex flex-row justify-center mt-4">
      <Button href="mailto:brandon.julio.t@icloud.com" isIcon={false}>
        Report
      </Button>
    </div>
  </Card>
)
