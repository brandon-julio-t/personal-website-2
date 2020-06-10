import "twin.macro"

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

export default () => (
  <Layout title="404">
    <div tw="flex flex-row justify-center">
      <Link tw="border px-3 py-2 rounded bg-black text-white" to="/">
        Return to Home
      </Link>
    </div>
  </Layout>
)
