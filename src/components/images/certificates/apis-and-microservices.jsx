import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "APIs and Microservices.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} {...props} />
}
