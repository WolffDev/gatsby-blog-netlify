import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => (
  <div>
    <h2>Posts</h2>
    {data.allContentfulBlogPost.edges.map(({ node }) => (
      <PostListing post={node} key={node.id} />
    ))}
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
    allContentfulBlogPost(filter: {node_locale: {regex: "/en-US/"}}) {
      edges {
        node {
          id
          title
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          createdAt(formatString: "DD MMMM, YYYY" fromNow: true locale: "da")
          slug
        }
      }
    }
  }
`