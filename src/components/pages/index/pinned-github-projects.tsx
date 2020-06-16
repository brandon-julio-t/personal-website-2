import { gql } from "apollo-boost"
import React, { memo } from "react"
import loadable from "@loadable/component"
import { useQuery } from "@apollo/react-hooks"

const IndexSection = loadable(() => import("./components/index-section"))
const APIError = loadable(() => import("./components/api-error"))
const PinnedRepositoriesLoading = loadable(() =>
  import("./components/pinned-repositories-loading")
)
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
      {loading ? (
        <PinnedRepositoriesLoading />
      ) : error ? (
        <APIError message={error.message} />
      ) : (
        <>
          <small className="text-center font-light mb-4 block">
            Query count remaining: {data.rateLimit.remaining}
            <br />
            Will reset at: {prettyDateTime(data.rateLimit.resetAt)}
          </small>

          <PinnedRepositoriesCards nodes={data.viewer.pinnedItems.nodes} />
        </>
      )}
    </IndexSection>
  )
})

const query = gql`
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
