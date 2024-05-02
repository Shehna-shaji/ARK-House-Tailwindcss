import React from 'react'
import{useLocation, Link} from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { convertSlugToTitle } from './slugservice'

const Breadcrumbs = () => {
    const location=useLocation()
    const pathname=location.pathname.split('/').filter(x => x)
  return (
    <div>
        <nav className='text-black mt-8 sm:mt-12 '>
            <ul className='flex gap-1 items-center'>
                <li>
                    <Link to='/'className='text-xs lg:text-lg'>HOME</Link>
                </li>
                {
                    pathname.map((value,index)=>{
                        const last=index=== pathname.length-1
                        const to=`/${pathname.slice(0,index+1).join}`
                        const title= convertSlugToTitle( value)

                        return(
                            <li key={to} className='flex gap-1'>
                                <span className='flex items-center'><FiArrowRight/></span>
                                {
                                    last?(
                                        <span>{title}</span>
                                    ):(
                                        <Link className='text-xs lg:text-lg font-normal ' to={to}>{title}</Link>
                                    )
                                }

                            </li>
                        )
                    
                    })
                }

            </ul>

        </nav>
      
    </div>
  )
}

export default Breadcrumbs
