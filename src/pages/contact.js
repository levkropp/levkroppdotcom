import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {TitleComponent} from "../components/title"

const BlogIndex = () => {


  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    allFile(filter: { extension: { eq: "asc" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`)

    //const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const publicKeyFile = data.allFile.edges[0]

    return (

      <Layout>

        <TitleComponent title="Contact | Lev Kropp" />
                  <h1 className="text-4xl text-center text-gray-500 font-bold">Contact Me</h1>
                  <p></p>
          <div className="bg-gray-300 rounded-lg p-6 ">
          <p>The best way to get in touch would be to email me at <a className="text-blue-800 font-bold" href="mailto:levkropp@protonmail.com">levkropp@protonmail.com</a></p>
          <p>If you're interested, you can encrypt your message using 
              <a href={publicKeyFile.node.publicURL} download className="text-green-800 font-bold"> my public PGP key</a></p>
          <p>If I create any social media accounts or something else, they'll show up here!</p>
          </div>
      </Layout>

  )
  
}

export default BlogIndex

