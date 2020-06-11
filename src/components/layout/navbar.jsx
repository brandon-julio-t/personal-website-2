import loadable from "@loadable/component"
import tw from "twin.macro"
import { Link } from "gatsby"
import { mdiHome, mdiFileDocument, mdiTools } from "@mdi/js"

const Icon = loadable(() => import("@mdi/react"))
const React = loadable(() => import("react"))

export default () => {
  return (
    <nav
      tw="
      bg-white
      container
      divide-x
      duration-300
      grid
      grid-cols-3
      hover:shadow
      mx-auto
      mx-auto
      p-5
      rounded-lg
      text-center
      tracking-widest
      transition
      "
    >
      <Link to="/">
        Home <NavIcon path={mdiHome} title="Home" />
      </Link>
      <Link to="/skills">
        Skills <NavIcon path={mdiTools} title="Skills" />
      </Link>
      <Link to="/curriculum-vitae">
        CV <NavIcon path={mdiFileDocument} title="Curriculum Vitae" />
      </Link>
    </nav>
  )
}

const NavIcon = tw(Icon)`h-8 mx-auto`
