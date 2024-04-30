import React from 'react'
import{useLocation, Link} from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { convertSlugToTitle } from './slugservice'

const Breadcrumbs = () => {
    const location=useLocation()
    const pathname=location.pathname.split('/').filter(x => x)
  return (
    <div>
        <nav className='text-black mt-12 '>
            <ul className='flex '>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                {
                    pathname.map((value,index)=>{
                        const last=index=== pathname.length-1
                        const to=`/${pathname.slice(0,index+1).join}`
                        const title= convertSlugToTitle( value)

                        return(
                            <li key={to} className='flex'>
                                <span className='flex items-center'><FiArrowRight/></span>
                                {
                                    last?(
                                        <span>{title}</span>
                                    ):(
                                        <Link className='text-lg font-normal' to={to}>{title}</Link>
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
