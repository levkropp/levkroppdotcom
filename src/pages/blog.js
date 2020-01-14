import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"


import Layout from "../components/layout"

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
    // const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (

      <Layout>

          <TitleComponent title="Blog | Lev Kropp" />

          <h1 className="text-4xl text-center text-gray-500 font-bold">Blog</h1>
          <h1 className="text-2xl text-center text-gray-400 font-bold">Projects, ideas, and opinions</h1>
          <ol className="flex flex-wrap justify-left flex-row">
              {posts.map((edge) => {

                  const pagePath = "/blog/"+edge.node.fields.slug

                  return (
                      <li className="m-4">
                        <Link to={pagePath}>
                          <div className="bg-gray-400 p-8 rounded-lg max-w-4xl shadow-lg hover:shadow-outline">
                                <h2 className="text-3xl font-bold">
                                    {edge.node.frontmatter.title}
                                </h2>
                                <p className="text-gray-700">
                                    {edge.node.frontmatter.date}
                                </p>
                                <p className="description text-gray-700">
                                  {edge.node.frontmatter.description}
                                </p>
                          </div>


                        </Link>
                      </li>
                  )
              })}
          </ol>
      </Layout>

  )
  
}

export default BlogIndex

