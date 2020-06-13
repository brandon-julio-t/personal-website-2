import loadable from "@loadable/component"
import tw from "twin.macro"

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
  <footer tw="flex flex-col">
    <section tw="flex flex-row flex-wrap justify-center">
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

    <section tw="flex flex-col my-5">
      <CenteredParagraph>
        <span>
          Built with{" "}
          <LinkUnderline href="https://www.gatsbyjs.org" isIcon={true}>
            Gatsby
          </LinkUnderline>
        </span>
        <InlineIcon
          path={mdiGatsby}
          title="Gatsby Logo"
          tw="fill-current text-purple-700"
        />
      </CenteredParagraph>

      <CenteredParagraph>
        <span>
          Designed with{" "}
          <LinkUnderline href="https://tailwindcss.com" isIcon={true}>
            Tailwind CSS
          </LinkUnderline>
        </span>
        <InlineIcon
          path={mdiTailwind}
          title="Tailwind CSS Logo"
          tw="fill-current text-teal-600"
        />
      </CenteredParagraph>

      <CenteredParagraph>
        <span>
          Powered by{" "}
          <LinkUnderline href="https://reactjs.org" isIcon={true}>
            React
          </LinkUnderline>
        </span>
        <InlineIcon
          path={mdiReact}
          title="React Logo"
          tw="fill-current text-blue-600"
        />
      </CenteredParagraph>

      <Button
        aria-label="Netlify logo"
        href="https://www.netlify.com"
        isIcon={true}
        tw="flex justify-center my-5"
      >
        <NetlifyLight />
      </Button>
    </section>
  </footer>
)

const CenteredParagraph = tw.p`flex flex-row justify-center items-center`
// @ts-ignore: this works
const ContactIcon = tw(Icon)`h-10 mx-2`
// @ts-ignore: this works
const InlineIcon = tw(Icon)`h-6 ml-1 inline-block`
// @ts-ignore: this works
const LinkUnderline = tw(Button)`underline align-top`

const socials = [
  {
    label: "Email",
    href: "mailto:brandon.julio.t@icloud.com",
    Component: <ContactIcon path={mdiEmail} title="Email" />,
  },
  {
    label: "Facebook Profile",
    href: "https://www.facebook.com/profile.php?id=100008724798107",
    Component: <ContactIcon path={mdiFacebook} title="Facebook Profile" />,
  },
  {
    label: "freeCodecamp Profile",
    href: "https://www.freecodecamp.org/brandon-julio-thenaro",
    Component: (
      <FreeCodeCamp
        // @ts-ignore
        title="freeCodecamp Profile"
        tw="h-10 w-10 mx-2 inline-block"
      />
    ),
  },
  {
    label: "GitHub Profile",
    href: "https://github.com/brandon-julio-t",
    Component: <ContactIcon path={mdiGithub} title="GitHub Profile" />,
  },
  {
    label: "Instagram Profile",
    href: "https://www.instagram.com/brandon.julio.t",
    Component: <ContactIcon path={mdiInstagram} title="Instagram Profile" />,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/brandonjuliothenaro",
    Component: <ContactIcon path={mdiLinkedin} title="LinkedIn Profile" />,
  },
  {
    label: "Twitter Profile",
    href: "https://twitter.com/brandon_julio_t",
    Component: <ContactIcon path={mdiTwitter} title="Twitter Profile" />,
  },
]
