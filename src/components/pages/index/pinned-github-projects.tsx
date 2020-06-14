import loadable from "@loadable/component"
import React, { memo, useEffect, useState } from "react"
import axios from "axios"

const IndexSection = loadable(() => import("./components/index-section"))
const APIError = loadable(() => import("./components/api-error"))
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
      try {
        const { data } = await axios.get(
          "/.netlify/functions/pinned-repositories"
        )

        setPinnedRepos(data?.viewer?.pinnedItems?.nodes)
        setRateLimitData(data?.rateLimit)
      } catch (e) {
        setErrorMessage(e.toString())
      }
    }

    fetchPinnedRepos()
  }, [])

  return (
    <IndexSection title="Pinned GitHub Projects">
      <small className="text-center font-light mb-4 block">
        Query count remaining: {rateLimitData?.remaining ?? "Loading..."}
        <br />
        Will reset at: {prettyDateTime(rateLimitData?.resetAt) ?? "Loading..."}
      </small>

      {errorMessage && !pinnedRepos ? (
        <APIError message={errorMessage} />
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
