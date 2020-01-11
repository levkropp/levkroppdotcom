import React from 'react'


import Layout from "../components/layout"
import SEO from "../components/seo"

import {TitleComponent} from "../components/title"

const BlogIndex = () => {




    //const { data } = this.props

    return (




      <Layout>
          
          <TitleComponent title="Projects | Lev Kropp" />
          
          <div className="bg-gray-300 rounded-lg p-6"> 
            <h1>My Projects</h1>
            <p>All my projects are hosted on <a className="underline hover:text-blue-900" href="https://github.com/levkropp/">my GitHub account.</a></p>

            <h2><a className="underline hover:text-blue-900" href="https://github.com/levkropp/levkroppdotcom">levkroppdotcom</a> <span className="text-green-700">(NodeJS) </span><span className="text-purple-700">(Gatsby) </span><span className="text-blue-500">(React)</span></h2>
            <p>This is the repository for my website! My site is powered by the NodeJS backend, with a React frontend, and styled using TailwindCSS.</p>
            

            <h2><a className="underline hover:text-blue-900" href="https://github.com/levkropp/faceit-afk">faceit-afk</a> <span className="text-blue-700">(Python)</span></h2>
            <p>faceit-afk is a simple Python script to keep your character from being removed from the server in DirectX video-games such as Counter-Strike: Global Offensive.</p>
            
          </div>
      </Layout>

  )
  
}

export default BlogIndex

