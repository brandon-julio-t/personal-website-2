import "twin.macro"

import Icon from "@mdi/react"
import React, { useState, useEffect } from "react"
import { mdiGithub } from "@mdi/js"

import { Button, Card, H3, Section, SectionHeader } from "../../index"

export default () => {
  const [pinnedRepos, setPinnedRepos] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const [rateLimitData, setRateLimitData] = useState({})

  useEffect(() => {
    async function fetchPinnedRepositories() {
      const response = await fetch("https://api.github.com/graphql", {
        headers: {
          Authorization: `bearer ${process.env.GITHUB_GRAPHQL_API_TOKEN}`,
        },
        method: "POST",
        body: JSON.stringify({ query: gitHubGraphql }),
      })

      const json = await response.json()

      if (json.errors) {
        setErrorMessage(json.errors[0].message)
      } else {
        setPinnedRepos(json.data?.viewer?.pinnedItems?.nodes)
        setRateLimitData(json.data?.rateLimit)
      }
    }

    fetchPinnedRepositories()
  }, [])

  return (
    <Section>
      <SectionHeader>Pinned GitHub Projects</SectionHeader>

      <small tw="text-center font-light mb-4 block">
        Query count remaining: {rateLimitData.remaining}
        <br />
        Will reset at: {prettyDateTime(rateLimitData.resetAt)}
      </small>

      {errorMessage && pinnedRepos.length === 0 ? (
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
      ) : pinnedRepos.length === 0 ? (
        <p tw="text-center">
          The robots are busy loading.
          <br />
          Please wait warmly...
        </p>
      ) : (
        <div tw="grid grid-cols-3 gap-4">
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
                    <Icon path={mdiGithub} title="View on GitHub" tw="h-8" />
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
  new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))

const prettyDateTime = date =>
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
