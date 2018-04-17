import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>{data.site.siteMetadata.title}</p>
    <p>{data.site.siteMetadata.desc}</p>
    <p>Now go build something great.</p>
  </div>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`