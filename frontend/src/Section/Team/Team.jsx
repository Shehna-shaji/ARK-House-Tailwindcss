import React from 'react'
import Heading from '../../Components/Heading/Heading'
import { employeeimages, employees } from '../../assets/Employeecard'

const Team = () => {

    const Employee=({image, name, position})=>{
        return(
            <div className='m-auto'>
                <div className='w-[287px] h-[277px] lg:w-[227px] lg:h-[217px] xl:w-[317px] xl:h-[307px]'>
                    <img src={image}/>
                    <div className='flex flex-col gap-1 pb-3 pl-3 bg-gray-50'>
                        <div className='font-normal text-xl'>{name}</div>
                        <div className='font-normal text-xl text-[#B2B2B2]'>{position}</div>

                    </div>

                </div>

            </div>

        )
    }
  return (
    <div className='flex flex-col gap-11' id='teams'>
        <Heading title='Our Team ' text='Show All'/>
        <div className='flex flex-col gap-6'>
            <div className='flex'>
                <p className='font-normal text-base lg:text-2xl '> Our team of expert architects and builders, with over 45 years of{" "}
            <br />
            combined experience, will bring your vision to life. Trust us to{" "}
            <br />
            deliver functional and beautiful structures that exceed <br />
            expectations.</p>

            </div>
            <div className='flex flex-col gap-14 xl:flex-row '>
                <div className='flex flex-col justify-between '>
                    <ul className='flex gap-4 sm:gap-10 md:gap-20 xl:flex-col sm:mx-auto lg:mx-0 lg:gap-20 py-0 xl:py-36'>
                        <li className='font-bold text-xs sm:text-lg underline underline-offset-[10px] md:text-base lg:text-lg'>
                            Management

                        </li>
                        <li className='font-bold text-xs sm:text-lg md:text-base lg:text-lg'>Architects</li>
                        <li className='font-bold text-xs sm:text-lg md:text-base lg:text-lg'>Engineers</li>
                        <li className='font-bold text-xs sm:text-lg md:text-base lg:text-lg'>Builders</li>

                    </ul>

                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col gap-20  lg:flex-row lg:gap-10 xl:gap-10 lg:-mx-10 xl:-mx-0'>
                        {employees.map(({image, name, position},i)=>{
                            return(
                                <Employee key={i} image={image} name={name} position={position}/>
                            )
                        })}

                    </div>
                    <div className='flex flex-col gap-20  lg:flex-row lg:gap-10 xl:gap-10 lg:-mx-10 xl:-mx-0'>
                        {employeeimages.map(({image, name, position},i)=>{
                            return(
                                <Employee key={i} image={image} name={name} position={position}/>
                                
                            )
                        })}

                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Team
