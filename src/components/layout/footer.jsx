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

export default () => (
  <footer tw="grid grid-rows-2 grid-flow-col gap-4 my-5">
    <section tw="flex flex-row justify-center">
      <ContactIcon path={mdiEmail} />
      <ContactIcon path={mdiFacebook} />
      <ContactIcon path={mdiEmail} />
      <ContactIcon path={mdiGithub} />
      <ContactIcon path={mdiInstagram} />
      <ContactIcon path={mdiLinkedin} />
      <ContactIcon path={mdiTwitter} />
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
        <a
          href="https://www.netlify.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <NetlifyLight />
        </a>
      </div>
    </section>
  </footer>
)

const ContactIcon = tw(Icon)`h-10 mx-2`
const CreditIcon = tw(Icon)`h-6 ml-2 inline-block`
const CreditParagraph = tw.p`flex flex-row items-center justify-end`
