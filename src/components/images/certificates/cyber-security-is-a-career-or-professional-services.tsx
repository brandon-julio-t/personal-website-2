import Img from "gatsby-image"
import * as React from "React"
import { graphql, useStaticQuery } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file(
        relativePath: {
          eq: "Cyber Security is a Career or Professional Services.png"
        }
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
