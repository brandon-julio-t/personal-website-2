/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import ThemeContext from "../context/theme"

interface SEOProps {
  description?: string
  lang?: string
  meta?: object[] | any[]
  title: string
}

export default (props: SEOProps) => {
  const { description, lang, meta, title } = props
  const { site, favicon } = useStaticQuery(query)

  const faviconURL = `${site.siteMetadata.siteUrl}${favicon.childImageSharp.fluid.srcWebp}`
  const metaDescription = description ?? site.siteMetadata.description

  const { theme } = useContext(ThemeContext)
  const isLight = theme === "light"
  const bgColor = isLight ? "bg-white" : "bg-black"
  const txtColor = isLight ? "text-black" : "text-white"

  return (
    <Helmet
      htmlAttributes={{
        lang: lang ?? "en-US",
        class: `${bgColor} ${txtColor}`,
      }}
      title={title}
      meta={metas({
        faviconURL,
        meta,
        metaDescription,
        site,
        title,
      })}
    >
      <script type="application/ld+json">
        {JSON.stringify(
          jsonld({
            faviconURL,
            site,
          })
        )}
      </script>
    </Helmet>
  )
}

const query = graphql`
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

function metas(args: any) {
  const { faviconURL, meta, metaDescription, site, title } = args

  return [
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
      content: faviconURL,
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
  ].concat(meta ?? [])
}

function jsonld(args: any) {
  const { faviconURL, site } = args

  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Brandon Julio Thenaro",
    url: site.siteMetadata.siteUrl,
    image: faviconURL,
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
  }
}
