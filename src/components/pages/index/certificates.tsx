import "twin.macro"

import loadable from "@loadable/component"

const IndexSection = loadable(() => import("./components/index-section"))

export default () => (
  <IndexSection title="Certificates">
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
  </IndexSection>
)

const certificates = [
  {
    Component: loadable(() =>
      import(`../../images/certificates/responsive-web-design`)
    ),
    label: "Responsive Web Design Certificate",
    url: "https://bit.ly/35OoTpT",
  },
  {
    Component: loadable(() =>
      import(
        `../../images/certificates/javascript-algorithms-and-data-structures`
      )
    ),
    label: "JavaScript Algorithms and Data Structures Certificate",
    url: "https://bit.ly/3dA7eFe",
  },
  {
    Component: loadable(() =>
      import(`../../images/certificates/front-end-libraries`)
    ),
    label: "Front End Libraries Certificate",
    url: "https://bit.ly/2YTCNpg",
  },
  {
    Component: loadable(() =>
      import(`../../images/certificates/apis-and-microservices`)
    ),
    label: "APIs and Microservices Certificate",
    url: "https://bit.ly/301Cvx8",
  },
  {
    Component: loadable(() => import(`../../images/certificates/java-basic`)),
    label: "Java Basic Certificate by HackerRank",
    url: "https://bit.ly/2YjFn5V",
  },
  {
    Component: loadable(() =>
      import(`../../images/certificates/apis-and-microservices`)
    ),
    label: "JavaScript Basic Certificate by HackerRank",
    url: "https://bit.ly/2UpwkQ0",
  },
  {
    Component: loadable(() => import(`../../images/certificates/react-basic`)),
    label: "React Basic Certificate by HackerRank",
    url: "https://bit.ly/2MK8kmd",
  },
  {
    Component: loadable(() =>
      import(`../../images/certificates/tokopedia-start-summit`)
    ),
    label: "Tokopedia START Summit Certificate",
    url: "https://bit.ly/2xPxg83",
  },
  {
    Component: loadable(() => import(`../../images/certificates/typing-speed`)),
    label: "Typing Speed Certificate by RataType",
    url: "https://bit.ly/2WH3M4U",
  },
]
