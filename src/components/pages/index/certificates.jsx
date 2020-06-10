import "twin.macro"

import React from "react"
import {
  APIsAndMicroservices,
  FrontEndLibraries,
  JavaBasic,
  JavaScriptAlgorithmsAndDataSturctures,
  JavaScriptBasic,
  ReactBasic,
  ResponsiveWebDesign,
  Section,
  SectionHeader,
  TokopediaSTARTSummit,
  TypingSpeed,
} from "../../index"

export default () => (
  <Section>
    <SectionHeader>Certificates</SectionHeader>

    <div tw="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      {certificates.map((cert, idx) => (
        <a href={cert.url} rel="noopener noreferrer" target="_blank" key={idx}>
          <cert.Component tw="transition duration-300 shadow-md hover:shadow-xl" />
        </a>
      ))}
    </div>
  </Section>
)

const certificates = [
  { Component: ResponsiveWebDesign, url: "https://bit.ly/35OoTpT" },
  {
    Component: JavaScriptAlgorithmsAndDataSturctures,
    url: "https://bit.ly/3dA7eFe",
  },
  { Component: FrontEndLibraries, url: "https://bit.ly/2YTCNpg" },
  { Component: APIsAndMicroservices, url: "https://bit.ly/301Cvx8" },
  { Component: JavaBasic, url: "https://bit.ly/2YjFn5V" },
  { Component: JavaScriptBasic, url: "https://bit.ly/2UpwkQ0" },
  { Component: ReactBasic, url: "https://bit.ly/2MK8kmd" },
  { Component: TokopediaSTARTSummit, url: "https://bit.ly/2xPxg83" },
  { Component: TypingSpeed, url: "https://bit.ly/2WH3M4U" },
]
