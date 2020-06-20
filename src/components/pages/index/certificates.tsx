import React from "react"
import loadable from "@loadable/component"

const IndexSection = loadable(() => import("./components/index-section"))
const Button = loadable(() => import("../../common/button"))

export default () => (
  <IndexSection title="Certificates">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      {certificates.map((cert, idx) => (
        <Button ariaLabel={cert.label} href={cert.url} isIcon={true} key={idx}>
          <cert.Component className="transition duration-300 shadow hover:shadow-md transform hover:scale-105" />
        </Button>
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
      import(`../../images/certificates/javascript-basic`)
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
    Component: loadable(() =>
      import(
        `../../images/certificates/cyber-security-is-a-career-or-professional-services`
      )
    ),
    label:
      "Cyber Security is a Career or Professional Services Seminar Participate Certificate",
    url: "https://bit.ly/2XX75H1",
  },
  {
    Component: loadable(() =>
      import(
        `../../images/certificates/scrum-foundation-professional-certificate`
      )
    ),
    label: "Scrum Foundation Professional Certificate",
  },
  {
    Component: loadable(() => import(`../../images/certificates/typing-speed`)),
    label: "Typing Speed Certificate by RataType",
    url: "https://bit.ly/2WH3M4U",
  },
]
