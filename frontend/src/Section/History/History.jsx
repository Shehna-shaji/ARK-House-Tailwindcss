import React from 'react'
import historyimage from '../../assets/historyimage.png'

const History = () => {
  return (
    <div className='flex flex-col gap-4 pt-14'>
        <h5 className='text-3xl font-semibold'>Our history</h5>
        <div className='flex flex-col gap-4'>
            <figure>
            <img src={historyimage} className='w-full'/>
            </figure>
            <article className='text-sm font-normal text-black md:text-base 2xl:text-lg'>
            For over four decades, ARK House, founded by renowned architect John
          Smith in 1975, has been a leader in the industry known for its
          innovative designs and commitment to client satisfaction. The agency's
          early work, including the Smith Tower in Seattle, established Smith's
          reputation as a leading architect. Over the years, ARK House has
          completed numerous high-profile projects, including the iconic
          Guggenheim Museum in Bilbao, Spain. The agency's success is due to its
          commitment to sustainability and community engagement, as well as its
          adaptation to new trends and technologies. Today, ARK House continues
          to push boundaries in architecture while setting new standards for
          innovation and excellence.

            </article>


        </div>

      
    </div>
  )
}

export default History
