import React, { memo } from "react"
import loadable from "@loadable/component"
import { gql, DocumentNode } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

import IndexSection from "./components/index-section"
import PinnedRepositoriesCardsMock from "./components/pinned-repositories-cards-mock"

const APIError = loadable(() => import("./components/api-error"))
const PinnedRepositoriesCards = loadable(() =>
  import("./components/pinned-repositories-cards")
)

export default memo(() => {
  const { loading, error, data } = useQuery(query, {
    variables: {
      pinnedItemsLimit: 10,
      repositoryLanguageLimit: 10,
    },
  })

  return (
    <IndexSection title="Pinned GitHub Projects">
      {error ? null : (
        <small className="text-center font-light mb-4 block">
          Query count remaining: {data?.rateLimit?.remaining ?? "loading..."}
          <br />
          Will reset at:{" "}
          {prettyDateTime(data?.rateLimit?.resetAt) ?? "loading..."}
        </small>
      )}

      {loading ? (
        <PinnedRepositoriesCardsMock />
      ) : error ? (
        <APIError message={error.message} />
      ) : (
        <PinnedRepositoriesCards nodes={data?.viewer?.pinnedItems?.nodes} />
      )}
    </IndexSection>
  )
})

const query: DocumentNode = gql`
  query($pinnedItemsLimit: Int!, $repositoryLanguageLimit: Int!) {
    rateLimit {
      remaining
      resetAt
    }
    viewer {
      pinnedItems(first: $pinnedItemsLimit) {
        nodes {
          ... on Repository {
            createdAt
            description
            homepageUrl
            name
            url
            languages(first: $repositoryLanguageLimit) {
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

const prettyDateTime = (date: string | null): string =>
  date &&
  new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(date))
