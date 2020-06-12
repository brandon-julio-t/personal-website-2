import loadable from "@loadable/component"
import { graphql, useStaticQuery } from "gatsby"

const Img = loadable(() => import("gatsby-image"))

interface ImageProps {}

export default (props: ImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: { eq: "JavaScript Algorithms and Data Structures.png" }
      ) {
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
