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

const FreeCodeCamp = loadable(() =>
  // @ts-ignore
  import("../../images/free-code-camp-logo.svg")
)

// @ts-ignore
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
          <ExternalLink aria-label={s.label} href={s.href} key={idx}>
            {s.Component}
          </ExternalLink>
        )
      )}
    </section>

    <section tw="flex flex-col my-5">
      <CreditParagraph>
        Built with{" "}
        <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>
        <CreditIcon title="Gatsby Logo" path={mdiGatsby} />
      </CreditParagraph>

      <CreditParagraph>
        Designed with{" "}
        <ExternalLink href="https://tailwindcss.com">Tailwind CSS</ExternalLink>
        <CreditIcon title="Tailwind CSS Logo" path={mdiTailwind} />
      </CreditParagraph>

      <CreditParagraph>
        Powered by <ExternalLink href="https://reactjs.org">React</ExternalLink>
        <CreditIcon title="React Logo" path={mdiReact} />
      </CreditParagraph>

      <ExternalLink
        aria-label="Netlify logo"
        href="https://www.netlify.com"
        tw="flex justify-center my-5"
      >
        <NetlifyLight />
      </ExternalLink>
    </section>
  </footer>
)

// @ts-ignore
const ContactIcon = tw(Icon)`h-10 mx-2`
// @ts-ignore
const CreditIcon = tw(Icon)`h-6 ml-2 inline-block`
const CreditParagraph = tw.p`text-center`

interface ExternalLink {
  children: React.ReactNode
  href: string
}

const ExternalLink = (props: ExternalLink) => (
  <a rel="noopener noreferrer" target="_blank" tw="underline" {...props}>
    {props.children}
  </a>
)

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
