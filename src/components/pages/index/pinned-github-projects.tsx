import "twin.macro"

import loadable from "@loadable/component"
import { mdiGithub, mdiLaunch } from "@mdi/js"
import { memo, useEffect, useState } from "react"

const Icon = loadable(() => import("@mdi/react"))

const Button = loadable(() => import("../../common/button"))
const Card = loadable(() => import("./components/card"))
const H3 = loadable(() => import("./components/h3"))
const IndexSection = loadable(() => import("./components/index-section"))
const LimitExceeded = loadable(() => import("./components/limit-exceeded"))
const PinnedRepositoriesLoading = loadable(() =>
  import("./components/pinned-repositories-loading")
)
const PinnedRepositoriesCards = loadable(() =>
  import("./components/pinned-repositories-cards")
)

export default memo(() => {
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [pinnedRepos, setPinnedRepos] = useState(undefined)
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
    <IndexSection title="Pinned GitHub Projects">
      <small tw="text-center font-light mb-4 block">
        Query count remaining: {rateLimitData?.remaining ?? "Loading..."}
        <br />
        Will reset at: {prettyDateTime(rateLimitData?.resetAt) ?? "Loading..."}
      </small>

      {errorMessage && !pinnedRepos ? (
        <LimitExceeded message={errorMessage} />
      ) : !pinnedRepos || pinnedRepos.length === 0 ? (
        <PinnedRepositoriesLoading />
      ) : (
        <PinnedRepositoriesCards pinnedRepos={pinnedRepos} />
      )}
    </IndexSection>
  )
})

const prettyDateTime = (date: string) =>
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
