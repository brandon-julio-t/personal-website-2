import Icon from "@mdi/react"
import React, { useContext } from "react"
import loadable from "@loadable/component"

import {
  mdiEmail,
  mdiFacebook,
  mdiGatsby,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiReact,
  mdiTailwind,
  mdiTwitter,
} from "@mdi/js"

import PageProvider from "../context/theme"

import Button from "../components/common/button"
// @ts-ignore
import FreeCodeCamp from "../images/free-code-camp-logo.svg"
// @ts-ignore
const NetlifyDark = loadable(() => import("../images/netlify-dark.svg"))
// @ts-ignore
const NetlifyLight = loadable(() => import("../images/netlify-light.svg"))

export default () => {
  const { theme } = useContext(PageProvider)

  return (
    <footer className="flex flex-col">
      <section className="flex flex-row flex-wrap justify-center">
        {socials.map(social => componentBySocialLabel(social))}
      </section>

      <section className="flex flex-col my-5">
        <p className="flex flex-row justify-center items-center">
          <span>
            Built with{" "}
            <Button
              className="underline"
              href="https://www.gatsbyjs.org"
              isIcon={true}
            >
              Gatsby
            </Button>
          </span>
          <Icon
            path={mdiGatsby}
            title="Gatsby Logo"
            className="fill-current text-purple-700 h-6 ml-1 inline-block"
          />
        </p>

        <p className="flex flex-row justify-center items-center">
          <span>
            Designed with{" "}
            <Button
              className="underline"
              href="https://tailwindcss.com"
              isIcon={true}
            >
              Tailwind CSS
            </Button>
          </span>
          <Icon
            path={mdiTailwind}
            title="Tailwind CSS Logo"
            className="fill-current text-teal-600 h-6 ml-1 inline-block"
          />
        </p>

        <p className="flex flex-row justify-center items-center">
          <span>
            Powered with{" "}
            <Button
              className="underline"
              href="https://reactjs.org"
              isIcon={true}
            >
              React
            </Button>
          </span>
          <Icon
            path={mdiReact}
            title="React Logo"
            className="fill-current text-blue-600 h-6 ml-1 inline-block"
          />
        </p>

        <p className="text-center">
          Background inspired by{" "}
          <Button className="underline" to="/background" isIcon={true}>
            particles.js
          </Button>{" "}
          from
          <br />
          <Button
            className="underline"
            href="https://vincentgarreau.com/particles.js/"
            isIcon={true}
          >
            Vincent Garreau
          </Button>
          {` and `}
          <Button
            className="underline"
            href="https://marcbruederlin.github.io/particles.js/"
            isIcon={true}
          >
            Marc Brüderlin
          </Button>
        </p>
      </section>

      <section className="mx-auto">
        <Button
          ariaLabel="Netlify logo"
          href="https://www.netlify.com"
          isIcon={true}
          className="mx-auto"
        >
          {theme === "light" ? <NetlifyLight /> : <NetlifyDark />}
        </Button>
      </section>
    </footer>
  )
}

const socials = [
  {
    label: "Email",
    href: "mailto:brandon.julio.t@icloud.com",
    Component: <Icon className="h-10 mx-2" path={mdiEmail} title="Email" />,
  },
  {
    label: "Facebook Profile",
    href: "https://www.facebook.com/profile.php?id=100008724798107",
    Component: (
      <Icon className="h-10 mx-2" path={mdiFacebook} title="Facebook Profile" />
    ),
  },
  {
    label: "freeCodecamp Profile",
    href: "https://www.freecodecamp.org/brandon-julio-thenaro",
    Component: (
      <FreeCodeCamp
        // @ts-ignore
        title="freeCodecamp Profile"
        className="fill-current h-10 w-10 mx-2 inline-block"
      />
    ),
  },
  {
    label: "GitHub Profile",
    href: "https://github.com/brandon-julio-t",
    Component: (
      <Icon className="h-10 mx-2" path={mdiGithub} title="GitHub Profile" />
    ),
  },
  {
    label: "Instagram Profile",
    href: "https://www.instagram.com/brandon.julio.t",
    Component: (
      <Icon
        className="h-10 mx-2"
        path={mdiInstagram}
        title="Instagram Profile"
      />
    ),
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/brandonjuliothenaro",
    Component: (
      <Icon className="h-10 mx-2" path={mdiLinkedin} title="LinkedIn Profile" />
    ),
  },
  {
    label: "Twitter Profile",
    href: "https://Twitter.com/brandon_julio_t",
    Component: (
      <Icon className="h-10 mx-2" path={mdiTwitter} title="Twitter Profile" />
    ),
  },
]

function componentBySocialLabel(social: {
  label: string
  href: string
  Component: JSX.Element
}): JSX.Element {
  if (social.label === "Email")
    return (
      <a aria-label={social.label} href={social.href} key={social.href}>
        {social.Component}
      </a>
    )

  return (
    <Button
      ariaLabel={social.label}
      href={social.href}
      isIcon={true}
      key={social.href}
    >
      {social.Component}
    </Button>
  )
}
