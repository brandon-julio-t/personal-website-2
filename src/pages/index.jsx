import "twin.macro"

import React from "react"

import Layout from "../components/layout"

import {
  Certificates,
  PinnedGithubProjects,
  TechnicalSkillsOverview,
} from "../components/pages/index"

export default () => (
  <Layout title="Home">
    <section tw="text-center font-light">
      <p tw="grid grid-cols-2 divide-x max-w-xs mx-auto">
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
