import "twin.macro"

import React from "react"

export default function Card(props) {
  return (
    <div tw="transition duration-300 shadow-md hover:shadow-lg p-5">
      {props.children}
    </div>
  )
}
