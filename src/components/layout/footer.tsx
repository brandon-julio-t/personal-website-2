import React from "react"
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

const Icon = loadable(() => import("@mdi/react"))

const Button = loadable(() => import("../common/button"))

const FreeCodeCamp = loadable(() =>
  // @ts-ignore: this works
  import("../../images/free-code-camp-logo.svg")
)

// @ts-ignore: this works
const NetlifyLight = loadable(() => import("../../images/netlify-light.svg"))

export default () => (
  <footer className="flex flex-col">
    <section className="flex flex-row flex-wrap justify-center">
      {socials.map((s, idx) =>
        s.label === "Email" ? (
          <a aria-label={s.label} href={s.href} key={idx}>
            {s.Component}
          </a>
        ) : (
          <Button aria-label={s.label} href={s.href} isIcon={true} key={idx}>
            {s.Component}
          </Button>
        )
      )}
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
          Powered by{" "}
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

      <Button
        ariaLabel="Netlify logo"
        href="https://www.netlify.com"
        isIcon={true}
        className="flex justify-center my-5"
      >
        <NetlifyLight />
      </Button>
    </section>
  </footer>
)

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
        className="h-10 w-10 mx-2 inline-block"
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
    label: "classNameitter Profile",
    href: "https://classNameitter.com/brandon_julio_t",
    Component: (
      <Icon
        className="h-10 mx-2"
        path={mdiTwitter}
        title="classNameitter Profile"
      />
    ),
  },
]
