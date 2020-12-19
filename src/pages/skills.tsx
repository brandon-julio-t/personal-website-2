import * as React from "React"

import Databases from "../components/pages/skills/databases"
import Frameworks from "../components/pages/skills/frameworks"
import Languages from "../components/pages/skills/languages"
import Layout from "../layouts"
import Others from "../components/pages/skills/others"

export default () => (
  <Layout title="Technical Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Languages />
      <Frameworks />
      <Databases />
      <Others />
    </div>
  </Layout>
)
