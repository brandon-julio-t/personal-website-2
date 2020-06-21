import Img from "gatsby-image"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ImageProps } from "../image-props"

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
