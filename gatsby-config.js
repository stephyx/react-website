module.exports = {
  siteMetadata: {
    title: 'StephyX Web',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'StephyX Web',
        short_name: 'StephyX',
        start_url: '/',
        background_color: '#38cdff',
        theme_color: '#38cdff',
        display: 'minimal-ui',
        icon: 'src/images/x-blue.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
