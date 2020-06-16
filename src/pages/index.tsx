import ApolloClient from "apollo-boost"
import React from "react"
import loadable from "@loadable/component"
import { ApolloProvider } from "@apollo/react-hooks"

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

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql",
})

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
