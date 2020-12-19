import * as React from "React"

import Button from "../../../common/button"
import Card from "./card"

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
