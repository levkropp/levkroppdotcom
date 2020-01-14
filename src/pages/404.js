import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {TitleComponent} from "../components/title"

class NotFoundPage extends React.Component {
  render() {

    return (
      <Layout>

        <TitleComponent title="404 | Lev Kropp" />

        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
