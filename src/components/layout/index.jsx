import "twin.macro"

import PropTypes from "prop-types"
import React from "react"
import loadable from "@loadable/component"

const Footer = loadable(() => import("./footer"))
const SEO = loadable(() => import("./seo"))
const Navbar = loadable(() => import("./navbar"))

export default function Layout(props) {
  return (
    <>
      <SEO title={props.title} />

      <Navbar />

      <header>
        <h1 tw="font-hairline tracking-wide text-6xl text-center my-5">
          {props.title}
        </h1>
      </header>

      <main tw="container mx-auto px-4">
        <hr tw="my-4" />
        {props.children}
        <hr tw="my-4" />
      </main>

      <Footer />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string
}
