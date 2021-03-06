import * as React from "React"

interface CardProps {
  children?: React.ReactNode
  className?: string
}

export default (props: CardProps) => (
  <div
    className={`border rounded transition-shadow duration-300 shadow hover:shadow-md p-5 ${
      props.className ?? ""
    }`}
  >
    {props.children}
  </div>
)
