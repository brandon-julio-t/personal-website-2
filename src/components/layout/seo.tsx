/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Person",
          name: "Brandon Julio Thenaro",
          url: site.siteMetadata.siteUrl,
          image: `${site.siteMetadata.siteUrl}${favicon.childImageSharp.fluid.srcWebp}`,
          sameAs: [
            "https://www.facebook.com/profile.php?id=100008724798107",
            "https://twitter.com/brandon_julio_t",
            "https://www.instagram.com/brandon.julio.t",
            "https://www.linkedin.com/in/brandonjuliothenaro",
            "https://github.com/brandon-julio-t",
            "https://www.brandonjuliothenaro.my.id/",
          ],
          jobTitle: "Student",
          worksFor: {
            "@type": "Organization",
            name: "BINUS University",
          },
        })}
      </script>
    </Helmet>
  )
}
