import React from 'react'
import { Link } from 'react-router-dom';
import logo11 from '../assets/logo11.png';

const Footer = () => {
  return (
    <div className=' font-Montserrat max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3  text-gray-300'>
        <div className='w-full flex justify-between items-center  md:flex-row flex-col  border-t-[1px] border-t-[#3F3E45]'>
       <Link to="/" className="mt-16">
        <img className="w-[120px] mx-8  flex items-center " src={logo11} alt="/" />
      </Link>   
         
              
                

              </div>
       
    </div>
  )
}

export default Footer