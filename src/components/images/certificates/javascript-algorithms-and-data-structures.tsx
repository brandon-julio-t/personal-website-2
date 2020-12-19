import Img from "gatsby-image"
import * as React from "React"
import { graphql, useStaticQuery } from "gatsby"

export default props => {
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
