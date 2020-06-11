import "twin.macro"

import loadable from "@loadable/component"
import { Link } from "gatsby"

const React = loadable(() => import("react"))

const Layout = loadable(() => import("../components/layout"))

export default () => (
  <Layout title="404 Not Found">
    <div tw="flex flex-row justify-center">
      <Link tw="text-4xl border border-black rounded px-5 py-3" to="/">
        Return to Home
      </Link>
    </div>
  </Layout>
)
