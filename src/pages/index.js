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
            <p>I'm a Computer Science student at York University in my second year.</p>
            <p>Welcome to my personal site! It's not very fancy, but I wrote it completely from scratch using Gatsby and ReactJS, and learned a lot while making it 😀</p>
            <p>In my spare time I like learning new things, recently I've been learning
              React and Gatsby which allowed me to make the website you're reading this on! For more information on what I've been working on check out the <Link to="/projects" className="underline hover:text-blue-900">Projects page.</Link>
            </p>
          </div>
      </Layout>

  )
  
}

export default BlogIndex

