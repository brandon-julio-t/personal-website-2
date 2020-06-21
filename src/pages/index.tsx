import React from "react"

import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
import { ApolloProvider } from "@apollo/react-hooks"

import Certificates from "../components/pages/index/certificates"
import Layout from "../layouts"
import PinnedGithubProjects from "../components/pages/index/pinned-github-projects"
import TechnicalSkillsOverview from "../components/pages/index/technical-skills-overview"

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

    <ApolloProvider client={client}>
      <PinnedGithubProjects />
    </ApolloProvider>

    <Certificates />
  </Layout>
)

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql",
  fetch,
})
