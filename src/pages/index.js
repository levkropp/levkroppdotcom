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
  }
`)

    //const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (

      <Layout>
          
          <TitleComponent title="Home | Lev Kropp" />

          <div className="bg-gray-300 rounded-lg p-6"> 
            <h1>Hey! I'm Lev.</h1>
            <p>Welcome to my site. It's simple, responsive, and gets the job done.</p>
            <p>Occasionally I post blog articles about what I'm working on. Check them out maybe.</p>
          </div>
      </Layout>

  )
  
}

export default BlogIndex

