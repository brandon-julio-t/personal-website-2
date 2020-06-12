import "twin.macro"

import loadable from "@loadable/component"
import { Link } from "gatsby"
import { mdiHome, mdiFileDocument, mdiTools, mdiChat } from "@mdi/js"

const Icon = loadable(() => import("@mdi/react"))

export default () => {
  return (
    <nav
      tw="
      container
      divide-x
      grid
      grid-cols-4
      justify-between
      mt-5
      mx-auto
      text-center
      tracking-widest
      "
    >
      {navLinks.map((navLink, idx) => (
        <Link to={navLink.link} key={idx}>
          {navLink.label ?? navLink.title}
          <Icon path={navLink.icon} title={navLink.title} tw="h-8 mx-auto" />
        </Link>
      ))}
    </nav>
  )
}

const navLinks = [
  {
    icon: mdiHome,
    link: "/",
    title: "Home",
  },
  {
    icon: mdiTools,
    link: "/skills",
    title: "Skills",
  },
  {
    icon: mdiFileDocument,
    link: "/curriculum-vitae",
    title: "Curriculum Vitae",
    label: "CV",
  },
  {
    icon: mdiChat,
    link: "/contact",
    title: "Contact",
  },
]
