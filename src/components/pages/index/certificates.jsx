import "twin.macro"

import loadable from "@loadable/component"

const React = loadable(() => import("react"))

const Section = loadable(() => import("./components/section"))
const SectionHeader = loadable(() => import("./components/section-header"))

const APIsAndMicroservices = loadable(() =>
  import("../../images/certificates/apis-and-microservices")
)
const FrontEndLibraries = loadable(() =>
  import("../../images/certificates/front-end-libraries")
)
const JavaBasic = loadable(() => import("../../images/certificates/java-basic"))
const JavaScriptAlgorithmsAndDataStructures = loadable(() =>
  import("../../images/certificates/javascript-algorithms-and-data-structures")
)
const JavaScriptBasic = loadable(() =>
  import("../../images/certificates/apis-and-microservices")
)
const ReactBasic = loadable(() =>
  import("../../images/certificates/react-basic")
)
const ResponsiveWebDesign = loadable(() =>
  import("../../images/certificates/responsive-web-design")
)
const TokopediaSTARTSummit = loadable(() =>
  import("../../images/certificates/tokopedia-start-summit")
)
const TypingSpeed = loadable(() =>
  import("../../images/certificates/typing-speed")
)

export default () => (
  <Section>
    <SectionHeader>Certificates</SectionHeader>

    <div tw="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      {certificates.map((cert, idx) => (
        <a
          aria-label={cert.label}
          href={cert.url}
          rel="noopener noreferrer"
          target="_blank"
          key={idx}
        >
          <cert.Component tw="transition duration-300 shadow-md hover:shadow-xl" />
        </a>
      ))}
    </div>
  </Section>
)

const certificates = [
  {
    Component: ResponsiveWebDesign,
    label: "Responsive Web Design Certificate",
    url: "https://bit.ly/35OoTpT",
  },
  {
    Component: JavaScriptAlgorithmsAndDataStructures,
    label: "JavaScript Algorithms and Data Structures Certificate",
    url: "https://bit.ly/3dA7eFe",
  },
  {
    Component: FrontEndLibraries,
    label: "Front End Libraries Certificate",
    url: "https://bit.ly/2YTCNpg",
  },
  {
    Component: APIsAndMicroservices,
    label: "APIs and Microservices Certificate",
    url: "https://bit.ly/301Cvx8",
  },
  {
    Component: JavaBasic,
    label: "Java Basic Certificate by HackerRank",
    url: "https://bit.ly/2YjFn5V",
  },
  {
    Component: JavaScriptBasic,
    label: "JavaScript Basic Certificate by HackerRank",
    url: "https://bit.ly/2UpwkQ0",
  },
  {
    Component: ReactBasic,
    label: "React Basic Certificate by HackerRank",
    url: "https://bit.ly/2MK8kmd",
  },
  {
    Component: TokopediaSTARTSummit,
    label: "Tokopedia START Summit Certificate",
    url: "https://bit.ly/2xPxg83",
  },
  {
    Component: TypingSpeed,
    label: "Typing Speed Certificate by RataType",
    url: "https://bit.ly/2WH3M4U",
  },
]
