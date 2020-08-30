import React from "react"
import loadable from "@loadable/component"
import { gql, DocumentNode } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

import IndexSection from "./components/index-section"
import PinnedRepositoriesCardsMock from "./components/pinned-repositories-cards-mock"

const APIError = loadable(() => import("./components/api-error"))
const PinnedRepositoriesCards = loadable(() =>
  import("./components/pinned-repositories-cards")
)

export default () => {
  const { loading, error, data } = useQuery(query, options)

  return (
    <IndexSection title="Pinned GitHub Projects">
      <RateLimitInfo data={data} error={error} />
      <Body data={data} error={error} loading={loading} />
    </IndexSection>
  )
}

function RateLimitInfo(props: any) {
  const { data, error } = props

  if (error) return null

  return (
    <small className="text-center font-light mb-4 block">
      Query count remaining: {data?.rateLimit?.remaining ?? "loading..."}
      <br />
      Will reset at: {prettyDateTime(data?.rateLimit?.resetAt) ?? "loading..."}
    </small>
  )
}

function Body(props: any) {
  const { data, error, loading } = props

  if (loading) return <PinnedRepositoriesCardsMock />
  if (error) return <APIError message={error.message} />
  return (
    <PinnedRepositoriesCards
      fallback={<PinnedRepositoriesCardsMock />}
      nodes={data?.viewer?.pinnedItems?.nodes}
    />
  )
}

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

const options = {
  variables: {
    pinnedItemsLimit: 10,
    repositoryLanguageLimit: 10,
  },
}

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
