import * as React from "React"
import loadable from "@loadable/component"
import { Link } from "gatsby"
import { mdiHome, mdiFileDocument, mdiTools, mdiChat } from "@mdi/js"

const Icon = loadable(() => import("@mdi/react"))

export default () => (
  <nav className="container divide-x grid grid-cols-4 justify-between pt-5 mx-auto text-center tracking-widest">
    {navLinks.map(navLink => (
      <NavLink {...navLink} />
    ))}
  </nav>
)

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

interface NavLinkProps {
  icon: string
  label?: string
  link: string
  title: string
}

function NavLink(props: NavLinkProps) {
  return (
    <Link to={props.link}>
      {props.label ?? props.title}
      <Icon className="h-8 mx-auto" path={props.icon} title={props.title} />
    </Link>
  )
}
