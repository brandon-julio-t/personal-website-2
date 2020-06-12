import "twin.macro"

import loadable from "@loadable/component"
import { mdiGithub, mdiLaunch } from "@mdi/js"

const Icon = loadable(() => import("@mdi/react"))

const Button = loadable(() => import("../../../common/button"))
const Card = loadable(() => import("./card"))
const H3 = loadable(() => import("./h3"))

interface Language {
  name: string
}

interface Languages {
  nodes: Language[]
}

interface PinnedRepository {
  createdAt: string
  description: string
  homepageUrl: string
  languages: Languages
  name: string
  url: string
}

interface PinnedRepositoriesCardsProps {
    pinnedRepos: PinnedRepository[]
}

export default (props: PinnedRepositoriesCardsProps) => (
  <div tw="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {props.pinnedRepos.map((repo: PinnedRepository, repoIdx: number) => (
      <div tw="flex flex-col" key={repoIdx}>
        <Card tw="flex-shrink">
          <H3 tw="capitalize">{repo.name.replace(/-/g, " ")}</H3>

          <p tw="font-light">Created at: {prettyDate(repo.createdAt)}</p>

          <p tw="my-4">{repo.description}</p>

          <div tw="flex flex-row flex-wrap my-4">
            {repo.languages.nodes.map((lang: Language, langIdx: number) => (
              <span
                tw="rounded-full bg-gray-300 flex-none px-3 py-1 mr-2 mb-2"
                key={langIdx}
              >
                {lang.name}
              </span>
            ))}
          </div>

          <div tw="flex flex-row justify-between items-center">
            <Button href={repo.homepageUrl} tw="flex flex-row items-center">
              <span tw="mr-2">View Live</span>

              <Icon path={mdiLaunch} title="View Live" tw="h-6 inline-block" />
            </Button>

            <a
              aria-label="View on GitHub"
              href={repo.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon path={mdiGithub} title="View on GitHub" tw="h-10" />
            </a>
          </div>
        </Card>
      </div>
    ))}
  </div>
)

const prettyDate = (date: string) =>
  date &&
  new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
