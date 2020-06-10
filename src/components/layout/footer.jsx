import Icon from "@mdi/react"
import React from "react"
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

import NetlifyLight from "../../images/netlify-light.svg"
import FreeCodecamp from "../../images/free-code-camp-logo.svg"

export default () => (
  <footer tw="grid grid-rows-2 grid-flow-col mb-16">
    <section tw="flex flex-row justify-center">
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

    <section tw="grid grid-cols-2 gap-4">
      <div>
        <CreditParagraph>
          Built with Gatsby <CreditIcon path={mdiGatsby} />
        </CreditParagraph>
        <CreditParagraph>
          Designed with Tailwind CSS <CreditIcon path={mdiTailwind} />
        </CreditParagraph>
        <CreditParagraph>
          Powered by React <CreditIcon path={mdiReact} />
        </CreditParagraph>
      </div>

      <div tw="flex items-center">
        <ExternalLink aria-label="Netlify logo" href="https://www.netlify.com">
          <NetlifyLight />
        </ExternalLink>
      </div>
    </section>
  </footer>
)

const ContactIcon = tw(Icon)`h-10 mx-2`
const CreditIcon = tw(Icon)`h-6 ml-2 inline-block`
const CreditParagraph = tw.p`flex flex-row items-center justify-end`

const ExternalLink = props => (
  <a rel="noopener noreferrer" target="_blank" {...props}>
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
      <FreeCodecamp
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
