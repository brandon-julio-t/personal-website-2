require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Personal Website`,
    description: `Personal website with Gatsby.js`,
    author: `@brandon_julio_t`,
    siteUrl: `https://www.brandonjuliothenaro.my.id`,
  },
  plugins: [
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Website`,
        short_name: `Personal Website`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.brandonjuliothenaro.my.id`,
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
