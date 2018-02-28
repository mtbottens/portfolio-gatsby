module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-directus`,
      options: {
        url: `${process.env.GATSBY_DIRECTUS_URL}`,
        accessToken: `${process.env.GATSBY_DIRECTUS_ACCESS_TOKEN}`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass'
  ],
};
