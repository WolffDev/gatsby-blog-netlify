module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'A new blog'
  },
  // pathPrefix: '/gatsby-blog-netlify',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'wdqqn2v2qrt8',
        accessToken: '3a3a0565530db66c74656a2defbef5272d6a94bdd57734c4c095a2fd225e16d0'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
  ],
}
