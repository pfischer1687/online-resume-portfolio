/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Paul Fischer`,
    description: `Paul Fischer's online resume portfolio.`,
    author: `@PaulFis43236408`,
    siteUrl: `https://paulfischer.dev/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paul Fischer`,
        short_name: `Paul Fischer`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#8b008b`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
