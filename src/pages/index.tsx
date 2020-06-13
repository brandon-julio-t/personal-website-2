import loadable from "@loadable/component"
import React from "react"

const Layout = loadable(() => import("../components/layout"))

const Certificates = loadable(() =>
  import("../components/pages/index/certificates")
)
const PinnedGithubProjects = loadable(() =>
  import("../components/pages/index/pinned-github-projects")
)
const TechnicalSkillsOverview = loadable(() =>
  import("../components/pages/index/technical-skills-overview")
)

export default () => (
  <Layout title="Home">
    <section className="text-center font-light">
      <p className="grid grid-cols-2 divide-x max-w-xs mx-auto">
        <span>Lifelong Learner</span>
        <span>Web Developer</span>
      </p>

      <p>Since 2019</p>
    </section>

    <TechnicalSkillsOverview />
    <PinnedGithubProjects />
    <Certificates />
  </Layout>
)
