import React from "react"
import loadable from "@loadable/component"

import Certificates from "../components/pages/index/certificates"
import Layout from "../layouts"
import PinnedGithubProjects from "../components/pages/index/pinned-github-projects"
import TechnicalSkillsOverview from "../components/pages/index/technical-skills-overview"

const ApolloClient = loadable.lib(() => import("apollo-boost"))
const ApolloProviderLoadable = loadable.lib(() => import("@apollo/react-hooks"))
const Fetch = loadable.lib(() => import("isomorphic-fetch"))

export default () => (
  <Layout title="Home">
    <section className="text-center font-light">
      <p className="grid grid-cols-2 divide-x max-w-xs mx-auto text-lg">
        <span>Lifelong Learner</span>
        <span>Web Developer</span>
      </p>

      <p>Since 2019</p>
    </section>

    <TechnicalSkillsOverview />

    <ApolloProviderLoadable>
      {({ ApolloProvider }) => (
        <ApolloClient>
          {({ default: apolloClient }) => (
            <Fetch>
              {({ default: fetch }) => (
                <ApolloProvider
                  client={
                    new apolloClient({
                      uri: "/.netlify/functions/graphql",
                      fetch,
                    })
                  }
                >
                  <PinnedGithubProjects />
                </ApolloProvider>
              )}
            </Fetch>
          )}
        </ApolloClient>
      )}
    </ApolloProviderLoadable>

    <Certificates />
  </Layout>
)
