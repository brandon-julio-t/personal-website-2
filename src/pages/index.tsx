import React, { useContext, useLayoutEffect } from "react"

import PageContext from "../context/page"

import Certificates from "../components/pages/index/certificates"
import PinnedGithubProjects from "../components/pages/index/pinned-github-projects"
import TechnicalSkillsOverview from "../components/pages/index/technical-skills-overview"

export default () => {
  const { setTitle } = useContext(PageContext)

  useLayoutEffect(() => {
    setTitle("Home")
  }, [])

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
