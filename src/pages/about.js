import React from 'react'


import Layout from "../components/layout"

import {TitleComponent} from "../components/title"

const BlogIndex = () => {




    //const { data } = this.props

    return (




      <Layout>
          
          <TitleComponent title="About | Lev Kropp" />
          
          <div className="bg-gray-300 rounded-lg p-6"> 
            <h1>About Me</h1>
            <p>I'm currently a student at York University in my 2nd year.</p>
            <p>In my spare time I like learning new things, recently I've been learning
              React and Gatsby which allowed me to make the website you're reading this on! 
              Aside from web development, I'm currently messing around with C# and .NET, trying to make a hacking roguelike with
              the MonoGame and SadConsole libraries. Stay tuned for some blog posts about that maybe. 
            </p>
          </div>
      </Layout>

  )
  
}

export default BlogIndex

