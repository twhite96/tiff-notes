module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/inbox`,
        parseWikiLinks: true,
      },
    },
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["Mdx"], // or ["MarkdownRemark"] (or both)
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `notes.tiffanywhite.blog`,
      },
    },
  ],
  siteMetadata: {
    title: `@tiff's notes`,
    author: "tiff",
    description: "A collection of notes and things I am thinking about.",
  },
}
