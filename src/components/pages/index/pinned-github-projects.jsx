import "twin.macro"

import Icon from "@mdi/react"
import React, { useState, useEffect } from "react"

import { mdiGithub } from "@mdi/js"

import { Button, Card, H3, Section, SectionHeader } from "./components"

export default () => {
  const [pinnedRepos, setPinnedRepos] = useState(undefined)
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [rateLimitData, setRateLimitData] = useState(undefined)

  useEffect(() => {
    async function fetchPinnedRepos() {
      const res = await fetch("https://api.github.com/graphql", {
        headers: {
          Authorization: `bearer ${process.env.GATSBY_GITHUB_GRAPHQL_API_TOKEN}`,
        },
        method: "POST",
        body: JSON.stringify({ query: gitHubGraphql }),
      })

      const json = await res.json()

      setErrorMessage(json?.errors?.[0]?.message)
      setPinnedRepos(json?.data?.viewer?.pinnedItems?.nodes)
      setRateLimitData(json?.data?.rateLimit)
    }

    fetchPinnedRepos()
  }, [])

  return (
    <Section>
      <SectionHeader>Pinned GitHub Projects</SectionHeader>

      <small tw="text-center font-light mb-4 block">
        Query count remaining: {rateLimitData?.remaining ?? "Loading..."}
        <br />
        Will reset at: {prettyDateTime(rateLimitData?.resetAt) ?? "Loading..."}
      </small>

      {errorMessage && !pinnedRepos ? (
        <Card tw="max-w-xs mx-auto">
          <p tw="text-center">
            {errorMessage}
            <span role="img" aria-label="sad face">
              😥
            </span>
            <br />
            Please come by another day.
          </p>
        </Card>
      ) : !pinnedRepos || pinnedRepos.length === 0 ? (
        <p tw="text-center">
          The robots are busy loading.
          <br />
          Please wait warmly...
        </p>
      ) : (
        <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pinnedRepos.map((repo, repoIdx) => (
            <div tw="flex flex-col" key={repoIdx}>
              <Card tw="flex-shrink">
                <H3 tw="capitalize">{repo.name.replace(/-/g, " ")}</H3>

                <p tw="font-light">Created at: {prettyDate(repo.createdAt)}</p>

                <p tw="my-4">{repo.description}</p>

                <div tw="flex flex-row flex-wrap my-4">
                  {repo.languages.nodes.map((lang, langIdx) => (
                    <span
                      tw="rounded-full bg-gray-300 flex-none px-3 py-1 mr-2 mb-2"
                      key={langIdx}
                    >
                      {lang.name}
                    </span>
                  ))}
                </div>

                <div tw="flex flex-row justify-between items-center">
                  <Button href={repo.homepageUrl}>View Live</Button>
                  <a href={repo.url} aria-label="View on GitHub">
                    <Icon path={mdiGithub} title="View on GitHub" tw="h-10" />
                  </a>
                </div>
              </Card>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

const prettyDate = date =>
  date &&
  new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))

const prettyDateTime = date =>
  date &&
  new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(date))

const gitHubGraphql = `
  query {
    rateLimit {
      remaining
      resetAt
    }
    viewer {
      pinnedItems(first: 10) {
        nodes {
          ... on Repository {
            createdAt
            description
            homepageUrl
            name
            url
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`
