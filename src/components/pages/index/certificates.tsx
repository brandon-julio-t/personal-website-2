import React from "react"

import Button from "../../common/button"

import APIsAndMicroservices from "../../images/certificates/apis-and-microservices"
import CyberSecurityIsACareerOrProfessionalServices from "../../images/certificates/cyber-security-is-a-career-or-professional-services"
import FrontEndLibraries from "../../images/certificates/front-end-libraries"
import IndexSection from "./components/index-section"
import JavaBasic from "../../images/certificates/java-basic"
import JavaScriptAlgorithmsAndDataStructures from "../../images/certificates/javascript-algorithms-and-data-structures"
import JavaScriptBasic from "../../images/certificates/javascript-basic"
import ReactBasic from "../../images/certificates/react-basic"
import ResponsiveWebDesign from "../../images/certificates/responsive-web-design"
import ScrumFoundationProfessionalCertificate from "../../images/certificates/scrum-foundation-professional-certificate"
import TokopediaStartSummit from "../../images/certificates/tokopedia-start-summit"
import TypingSpeed from "../../images/certificates/typing-speed"

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
    Component: TokopediaStartSummit,
    label: "Tokopedia START Summit Certificate",
    url: "https://bit.ly/2xPxg83",
  },
  {
    Component: CyberSecurityIsACareerOrProfessionalServices,
    label:
      "Cyber Security is a Career or Professional Services Seminar Participate Certificate",
    url: "https://bit.ly/2XX75H1",
  },
  {
    Component: ScrumFoundationProfessionalCertificate,
    label: "Scrum Foundation Professional Certificate",
  },
  {
    Component: TypingSpeed,
    label: "Typing Speed Certificate by RataType",
    url: "https://bit.ly/2WH3M4U",
  },
]
