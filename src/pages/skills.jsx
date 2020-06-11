import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

const Layout = loadable(() => import("../components/layout"))

const Databases = loadable(() => import("../components/pages/skills/databases"))
const Frameworks = loadable(() =>
  import("../components/pages/skills/frameworks")
)
const Languages = loadable(() => import("../components/pages/skills/languages"))
const Others = loadable(() => import("../components/pages/skills/others"))

export default () => (
  <Layout title="Technical Skills">
    <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Languages />
      <Frameworks />
      <Databases />
      <Others />
    </div>
  </Layout>
)