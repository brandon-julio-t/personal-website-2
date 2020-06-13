import React from "react"
import loadable from "@loadable/component"
import { graphql, useStaticQuery } from "gatsby"

import { ImageProps } from "../image-props"

const Img = loadable(() => import("gatsby-image"))

export default (props: ImageProps) => {
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
