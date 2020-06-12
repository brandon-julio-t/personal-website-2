/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string
  lang?: string
  meta?: object[] | any[]
  title: string
}

export default function SEO(props: SEOProps) {
  const { description, lang, meta, title } = props
  const { site, favicon } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            siteUrl
            title
          }
        }
        favicon: file(relativePath: { eq: "icon.jpg" }) {
          childImageSharp {
            fluid {
              srcWebp
            }
          }
        }
      }
    `
  )

  const metaDescription = description ?? site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: lang ?? "en-US",
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}${favicon.childImageSharp.fluid.srcWebp}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta ?? [])}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
