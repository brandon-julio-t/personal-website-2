import "twin.macro"

import React from "react"
import { Link } from "gatsby"

import Footer from "./footer"
import SEO from "./seo"

export default props => (
  <>
    <SEO title={props.title} />

    <nav
      tw="
      bg-white
      container
      divide-x
      duration-300
      gap-4
      grid
      grid-cols-3
      hover:shadow
      mx-auto
      mx-auto
      p-5
      rounded-lg
      text-center
      tracking-widest
      transition
      "
    >
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/curriculum-vitae">CV</Link>
    </nav>

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
