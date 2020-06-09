import "twin.macro"

import React from "react"

import {
  Certificates,
  Layout,
  PinnedGithubProjects,
  Section,
  TechnicalSkillsOverview,
} from "../components/index"

export default () => (
  <Layout title="Home">
    <Section tw="text-center">
      <p>Lifelong Learner | Web Developer</p>
      <p>Since 2019</p>
    </Section>

    <TechnicalSkillsOverview />
    <PinnedGithubProjects />
    <Certificates />
  </Layout>
)
