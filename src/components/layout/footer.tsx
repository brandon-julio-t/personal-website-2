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
        Built with{" "}
        <Button href="https://www.gatsbyjs.org" isIcon={true}>
          Gatsby
        </Button>
        <InlineIcon title="Gatsby Logo" path={mdiGatsby} />
      </CenteredParagraph>

      <CenteredParagraph>
        Designed with{" "}
        <Button href="https://tailwindcss.com" isIcon={true}>
          Tailwind CSS
        </Button>
        <InlineIcon title="Tailwind CSS Logo" path={mdiTailwind} />
      </CenteredParagraph>

      <CenteredParagraph>
        Powered by{" "}
        <Button href="https://reactjs.org" isIcon={true}>
          React
        </Button>
        <InlineIcon title="React Logo" path={mdiReact} />
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

const CenteredParagraph = tw.p`text-center`
// @ts-ignore: this works
const ContactIcon = tw(Icon)`h-10 mx-2`
// @ts-ignore: this works
const InlineIcon = tw(Icon)`h-6 ml-2 inline-block`

const socials = [
  {
    label: "Email",
    href: "mailto:brandon.julio.t@icloud.com",
    Component: <ContactIcon title="Email" path={mdiEmail} />,
  },
  {
    label: "Facebook Profile",
    href: "https://www.facebook.com/profile.php?id=100008724798107",
    Component: <ContactIcon title="Facebook Profile" path={mdiFacebook} />,
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
    Component: <ContactIcon title="GitHub Profile" path={mdiGithub} />,
  },
  {
    label: "Instagram Profile",
    href: "https://www.instagram.com/brandon.julio.t",
    Component: <ContactIcon title="Instagram Profile" path={mdiInstagram} />,
  },
  {
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/brandonjuliothenaro",
    Component: <ContactIcon title="LinkedIn Profile" path={mdiLinkedin} />,
  },
  {
    label: "Twitter Profile",
    href: "https://twitter.com/brandon_julio_t",
    Component: <ContactIcon title="Twitter Profile" path={mdiTwitter} />,
  },
]
