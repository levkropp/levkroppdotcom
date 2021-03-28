import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (

        <footer className="mt-12 text-center text-xl">

        <p className="text-gray-500">&copy; {data.site.siteMetadata.author} 2019-2021</p>

        </footer>

    )

}

export default Footer