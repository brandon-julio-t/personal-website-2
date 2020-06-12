import "twin.macro"

import loadable from "@loadable/component"
import { Link } from "gatsby"

const Layout = loadable(() => import("../components/layout"))

export default () => (
  <Layout title="404 Not Found">
    <div tw="flex flex-row justify-center">
      <Link
        to="/"
        tw="text-4xl border border-gray-500 hover:border-black transition duration-300 rounded px-5 py-3"
      >
        Return to Home
      </Link>
    </div>
  </Layout>
)
