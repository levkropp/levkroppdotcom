import React from 'react'
import { Link} from "gatsby"

import meImage from '../../content/assets/lev.jpg'

import Layout from "../components/layout"

import {TitleComponent} from "../components/title"

const BlogIndex = () => {



    //const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (

      <Layout>
          
          <TitleComponent title="Home | Lev Kropp" />

          <div className="bg-gray-300 rounded-lg p-6 text-center"> 
            <h1>Hey! I'm Lev 🦁💻</h1>
            <p className="bg-green-700 text-lg text-white font-black p-1 rounded-lg w-1/2 md:w-1/3 m-auto mb-4"><a href="#">Download my resume 📃</a></p>
            <img className="h-64 m-auto border-4 border-gray-500 rounded-full" src={meImage} />
            <p className="text-lg font-thin pb-2">I'm a Computer Science student at York University in my third year.</p>
            <p className="text-lg font-thin pt-2">Currently, I'm performing a co-op placement in the Engineering Technical Services department at the <a href="https://www.sanofi.ca/en/about-us/sanofi-pasteur" className="text-blue-500 underline">Toronto vaccine site</a> for the biotechnology company <a href="https://www.sanofi.com/" className="underline text-blue-500 font-bold">Sanofi</a>.</p>
            
            {/* <p>Welcome to my personal site! It's not very fancy, but I wrote it completely from scratch using Gatsby and ReactJS, and learned a lot while making it!</p>
            <p>In my spare time I like learning new things, recently I've been learning
              React and Gatsby which allowed me to make the website you're reading this on! For more information on what I've been working on check out the <Link to="/projects" className="underline hover:text-blue-900">Projects page.</Link>
            </p> */}



            <h1>Education</h1>
            <h3 className="font-bold text-xl">BA Honors Computer Science @ York University</h3>
            <h3 className="font-black">September 2018 - Present</h3>
            <h3 className="font-black">Toronto, Canada</h3>

            <h3 className="font-bold text-xl mt-4">High School Diploma @ W. L. Mackenzie CI</h3>
            <h3 className="font-black">September 2014 - June 2018</h3>
            <h3 className="font-black">Honor Roll</h3>

            <h1 className="">Experience</h1>
            <p className="text-sm p-0 underline font-black text-blue-500 mb-4"><Link to="/projects">For personal projects, visit the Projects Page</Link></p>

            <h3 className="font-bold text-xl">Co-Op Placement at Sanofi</h3>
            <h3 className="font-black">January 2021 - Present</h3>
            <p className="text-lg font-thin pt-2 md:w-2/3 md:m-auto">At Sanofi, I support the Engineering Technical Services team by writing algorithms and designing software for Microsoft apps to improve the team's productivity and collaboration.</p>
            
            <h3 className="font-bold text-xl">High School Programming Team</h3>
            <h3 className="font-black">October 2016 - June 2017</h3>
            <p className="text-lg font-thin pt-2 md:w-2/3 md:m-auto">I led a team of programmers in regional highschool coding competitions resulting in multiple top-decile placements. I was also selected to tutor local middle school students at my high school's Science Olympics.</p>
            





          </div>
      </Layout>

  )
  
}

export default BlogIndex

