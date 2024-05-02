import React from 'react'
import Heading from '../../Components/Heading/Heading'
import { useNavigate } from 'react-router-dom'
import { employeeimages, engineers } from '../../assets/Employeecard'

const Developmentteam = () => {

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
const navigate=useNavigate()
  return (
    <div>
        <Heading title='Development Team' text='Contact Us' onclick={()=>navigate('/contact')}/>
        <div className='flex flex-col gap-7 lg:gap-16 mx-auto lg:flex-row pt-4 lg:pt-7'>
            <div> 
                <ul className=' hidden lg:flex  lg:flex-col gap-[370px] md:justify-between '>
                    <li className='font-medium'>Managers</li>
                    <li className='font-medium'>Engineers</li>

                </ul>
            </div>

            <div className='flex flex-col  lg:flex-col  lg:gap-20  gap-14'>
                <h6 className='lg:hidden font-medium text-lg text-center'>Managers</h6>
                <div  className='flex flex-col gap-20  md:grid grid-cols-2 lg:flex lg:flex-row  lg:gap-10 xl:gap-10 lg:-mx-10 xl:-mx-0'>
                    {employeeimages.map((emp)=>{
                        return <Employee key={emp.id} image={emp.image} name={emp.name} position={emp.position}/>
                    })}

                </div>
                <h6 className='lg:hidden font-medium text-lg text-center pt-10'>Engineers</h6>
                <div  className='flex flex-col gap-20  md:grid grid-cols-2 lg:flex lg:flex-row lg:gap-10 xl:gap-10 lg:-mx-10 xl:-mx-0'>
                    {engineers.map((emp)=>{
                        return <Employee key={emp.id} image={emp.image} name={emp.name} position={emp.position}/>
                    })}

                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Developmentteam
