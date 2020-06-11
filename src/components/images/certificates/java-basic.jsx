import loadable from "@loadable/component"
import { graphql, useStaticQuery } from "gatsby"

const Img = loadable(() => import("gatsby-image"))
const React = loadable(() => import("react"))

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Java (Basic).png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} {...props} />
}
