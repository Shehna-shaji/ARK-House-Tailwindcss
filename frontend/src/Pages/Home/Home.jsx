import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Section/About/About'
import Service from '../../Section/Service/Service'
import RecentProjects from '../../Section/RecentProjects/RecentProjects'
import Team from '../../Section/Team/Team'
import Blog from '../../Section/Blog/Blog'


const Home = () => {
  return (
    <div className='w-full '>
        
        <Hero/>
        <About/>
        <Service/>
        <RecentProjects/>
        <Team/>
        <Blog/>
        
    </div>
  )
}

export default Home
