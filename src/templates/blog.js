import React from 'react'

import {graphql} from "gatsby"

import Layout from "../components/layout"

import "../styles/blogstyle.css"

import {TitleComponent} from "../components/title"

export const query = graphql`
    
query (
        $slug: String!
    ) {
        
        markdownRemark(
        fields: {
            slug: {
            eq: $slug
            }
        }
        ) {
        
            frontmatter {
                title
                date
            }
            html
        }
        
    }
`

const Blog = (props) => {

    return (
        <Layout>
            <TitleComponent title={props.data.markdownRemark.frontmatter.title} />
            <h1 className="text-4xl font-bold text-gray-500 pb-0 mb-0">{props.data.markdownRemark.frontmatter.title}</h1>
            <p className="italic text-gray-300 -mt-6">{props.data.markdownRemark.frontmatter.date}</p>
            <div 
            dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}
            className="blogpost m-2 -mx-4 bg-gray-400 rounded-lg p-4">

            </div>
        </Layout>
    )

}

export default Blog