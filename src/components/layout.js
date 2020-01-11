import React from "react"
import { Link } from "gatsby"

import Footer from "./footer.js"

import Header from "./header.js"

const Layout = (props) => {
    return (
      <div className="">
        <div className="flex flex-col min-h-screen p-4 max-w-5xl container my-0 mx-auto">
          
          <div className="flex-grow">
            <Header />
            <div className="bg-gray-700 rounded-lg p-6 min-h-screen"> 
              {props.children}
            </div>

          </div>

        <Footer />
        </div>
      </div>

    )
}

export default Layout
