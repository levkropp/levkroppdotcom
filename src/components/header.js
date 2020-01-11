import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"



const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const navItemStyle = "text-2xl text-gray-500 mr-4 hover:text-gray-400"

    const navItemStyleActive = "text-2xl text-gray-500 font-bold mr-4 hover:text-gray-400"

    return (

        <header className="my-8 no-underline text-center">

    <h1>
        <Link className="text-gray-500 text-5xl font-bold" to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <nav>
        <ul className="flex flex-row justify-center list-none m-0 xs:flex-col">
          <li>
            <Link
              className={navItemStyle}
              activeClassName={navItemStyleActive}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navItemStyle}
              activeClassName={navItemStyleActive}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={navItemStyle}
              activeClassName={navItemStyleActive}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={navItemStyle}
              activeClassName={navItemStyleActive}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

        </header>

    )

}

export default Header