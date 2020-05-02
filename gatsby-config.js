module.exports = {
  siteMetadata: {
      siteTitle: `Wiki.BlackcoinNL`,
      defaultTitle: `Wiki.BlackcoinNL`,
      siteTitleShort: `Wiki.BlackcoinNL`,
      siteDescription: `A Wiki for Blackcoin!`,
      siteUrl: `https://wikiBlackcoinNL.netlify.app`,
      siteAuthor: `DanielC.us`,
      siteImage: `/banner.png`,
      siteLanguage: `en`,
      footer: `Wiki.BlackcoinNL`,
    themeColor: `#7159c1`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `sidebar`,
        docsPath: `wiki`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wiki.BlackcoinNL`,
        short_name: `Wiki.BlackcoinNL`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://wiki.blackcoin.nl`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
