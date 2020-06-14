const axios = require("axios").default

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    console.log({ event })
    console.log({ context })

    const {
      data: { data },
    } = await axios.post(
      "https://api.github.com/graphql",
      {
        query,
      },
      {
        headers: {
          Authorization: `bearer ${process.env.GITHUB_GRAPHQL_API_TOKEN}`,
        },
      }
    )

    console.log({ data })

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    console.log({ err })
    return { statusCode: 500, body: err.toString() }
  }
}

const query = `
  query {
    rateLimit {
      remaining
      resetAt
    }
    viewer {
      pinnedItems(first: 10) {
        nodes {
          ... on Repository {
            createdAt
            description
            homepageUrl
            name
            url
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`
