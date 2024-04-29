import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Section/About/About'
import Service from '../../Section/Service/Service'
import RecentProjects from '../../Section/RecentProjects/RecentProjects'


const Home = () => {
  return (
    <div className='w-full '>
        
        <Hero/>
        <About/>
        <Service/>
        <RecentProjects/>
        
    </div>
  )
}

export default Home
