import React from 'react'
import Button from '../Button/Button'
import SocialMedia from '../SocialMedia/SocialMedia'
import heroimage from '../../assets/HeroImage.png'

const Hero = () => {
  return (
    <div className='flex  flex-1 justify-between flex-col '>
        <div className='flex justify-between mt-10 sm:mt-14'>
            <div className='flex flex-col  items-end mt-10 sm:mt-14 xl:mt-16'>
            <h6 className="text-xs md:text-sm lg:text-xl font-medium">Since 1975 — </h6>
          <h2 className="text-xl font-bold z-10 sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl md:z-10">
            Architecture.
            <br /> Planning.
            <br /> Design.
          </h2>

            </div>
            <div className='flex flex-col justify-evenly items-end'>
                <div>
                    <Button text='Contact Us'/>
                </div>
                <div>
                    <SocialMedia/>
                </div>

            </div>

        </div>
        <div className='bg-slate-50  bg-cover w-full max-w-full h-screen  flex-1 flex items-center justify-center relative bottom-1 sm:bottom-0 md:bottom-8 lg:bottom-16 xl:bottom-24'>
            <img src={heroimage} className='relative -top-5 bg-cover w-auto h-auto    md:-top-7 lg:-top-9 xl:-top-10' />

        </div>
        <hr className="w-full border-0 h-0.5 bg-black size-full"/>
      
    </div>
  )
}

export default Hero
