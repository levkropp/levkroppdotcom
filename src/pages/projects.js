import React from 'react'


import Layout from "../components/layout"

import {TitleComponent} from "../components/title"

const BlogIndex = () => {




    //const { data } = this.props

    return (




      <Layout>
          
          <TitleComponent title="Projects | Lev Kropp" />
          
          <div className="bg-gray-300 rounded-lg p-6"> 
            <h1>My Projects</h1>

            <h2><a className="underline hover:text-blue-900" href="https://fruni.gitlab.io">Fruni</a> <span className="text-green-700">(Node.js) </span><span className="text-orange-700">(Firebase) </span><span className="text-green-500">(Vue)</span></h2>
            <p>Fruni is an app to share your weekly schedule with friends. It's powered by Node with a Firebase database and a Vue frontend.</p>
            <p>What I learned from this project: Node.js, Firebase/Firestore, Webpack, Vue, CI/CD</p>
            <h2><a className="underline hover:text-blue-900" href="https://github.com/levkropp/levkroppdotcom">levkroppdotcom</a> <span className="text-green-700">(Node.js) </span><span className="text-purple-700">(Gatsby) </span><span className="text-blue-500">(React)</span></h2>
            <p>This is the repository for my website! My site is powered by the Node backend, with a React frontend, and styled using TailwindCSS.</p>
            <p>What I learned from this project: Node.js, Gatsby, React.js, TailwindCSS</p>

            <h2><a className="underline hover:text-blue-900" href="https://github.com/levkropp/faceit-afk">faceit-afk</a> <span className="text-blue-700">(Python)</span></h2>
            <p>faceit-afk is a simple Python script to keep your character from being removed from the server in DirectX video-games such as Counter-Strike: Global Offensive.</p>
            
          </div>
      </Layout>

  )
  
}

export default BlogIndex

