import "twin.macro"

import Icon from "@mdi/react"
import React, { useState } from "react"
import { mdiGithub } from "@mdi/js"

import { Button, Card, H3, Section, SectionHeader } from "../../index"

export default () => {
  const [pinnedRepos, setPinnedRepos] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  fetch("https://api.github.com/graphql", {
    headers: {
      Authorization: `bearer ${process.env.GITHUB_GRAPHQL_API_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify({
      query: `
        query {
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
      `,
    }),
  })
    .then(res => res.json())
    .then(json => {
      if (json.errors) {
        setErrorMessage(json.errors[0].message)
      } else {
        setPinnedRepos(json.data?.viewer?.pinnedItems?.nodes)
      }
    })

  return (
    <Section>
      <SectionHeader>Pinned GitHub Projects</SectionHeader>

      {errorMessage ? (
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
            <Card key={repoIdx}>
              <H3>{repo.name}</H3>

              <p>
                Created at:{" "}
                {new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(repo.createdAt))}
              </p>

              <p>{repo.description}</p>

              <ul tw="flex flex-row">
                {repo.languages.nodes.map((lang, langIdx) => (
                  <li tw="mx-2" key={langIdx}>
                    {lang.name}
                  </li>
                ))}
              </ul>

              <div tw="flex flex-row justify-between items-center mt-5">
                <Button href={repo.homepageUrl}>View Live</Button>
                <a href={repo.url}>
                  <Icon tw="h-8" path={mdiGithub} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      )}
    </Section>
  )
}
