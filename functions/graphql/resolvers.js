module.exports = {
  Query: {
    rateLimit: async (parent, args, context, info) =>
      context.dataSources.gitHubAPI.getRateLimit(),

    viewer: async (parent, args, context, info) =>
      context.dataSources.gitHubAPI.getViewer(info.variableValues),
  },

  PinnableItem: {
    __resolveType(obj, context, info) {
      // I'm only querying for Repository, not Gist
      return "Repository"
    },
  },
}
