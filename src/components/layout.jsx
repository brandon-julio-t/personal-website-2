import "twin.macro"

import React from "react"

import { SEO } from "./index"

export default function Layout(props) {
  return (
    <>
      <SEO title={props.title} />

      <header>
        <h1 tw="font-hairline tracking-wide text-6xl text-center my-5">
          {props.title}
        </h1>
      </header>

      <main tw="container mx-auto px-4">
        <hr tw="my-4" />

        {props.children}
      </main>
    </>
  )
}
