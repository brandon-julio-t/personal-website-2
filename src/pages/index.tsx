import React, { useContext, useEffect } from "react"
import loadable from "@loadable/component"

import PageContext from "../context/page"

const Certificates = loadable(() =>
  import("../components/pages/index/certificates")
)
const PinnedGithubProjects = loadable(() =>
  import("../components/pages/index/pinned-github-projects")
)
const TechnicalSkillsOverview = loadable(() =>
  import("../components/pages/index/technical-skills-overview")
)

export default () => {
  useContext(PageContext).setTitle("Home")

  return (
    <>
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
    </>
  )
}
