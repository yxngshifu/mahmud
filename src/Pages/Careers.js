import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import scale from '../assets/scale.png'
import { Link } from 'react-router-dom';

function Careers () {
  return (
    <div className='font-Montserrat'>
         <Navbar/>
           <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        Careers</h1>
        </div>
        <div className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black'>
      <div className='py-20 px-20'>
        <p className='py-10'>M.A. Mahmud SAN & Co is a leading cross border law firm dedicated to providing tailored legal services, creating timely and efficient legal solutions. 

Our team of professionals are characterised by their scholastic background from reputable Universities and possess excellent reputation for quality service delivery and strict adherence ethical standards. </p>

             <h2 className='font-bold text-l'><Link to='/ftemployment'>Full Time Employment</Link></h2>
             <p className='font-bold text-sm'><Link to='/internship'>Internship</Link></p>
             <p className='font-bold text-sm'><Link to='/diversity'> Diversity</Link></p>
        </div>
        <div className='py-20 px-20'>
          
           <div><img className="w-[350px] mx-auto my-4 py-10 " src={scale} alt="/" /></div>
        </div>
        <div>
        </div>
      </div>
         <Newsletter/>
         <Footer/>
    </div>
  )
}

export default Careers;