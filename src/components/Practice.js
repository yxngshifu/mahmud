import React from 'react'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import scale from '../assets/scale.png'
function Practice() {
  return (
    <div>
        <Navbar/>
        <div className='font-Montserrat'>
        <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        Our Practice Areas</h1>
        </div>
         <div className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black font-semibold'>
         <div className='py-20 px-20'>
         <p>General Litigation</p>
         <p>Energy Law</p>
         <p>Corporate Transaction/Cross Border Transactions</p>
         <p>Securities Regulation</p>
         <p>Financial Services</p>
         <p>Economic Regulation</p>
         <p>IT and Telecommunication</p>
         <p>Property Law And Conveyance</p>
         <p>Human Right</p>
         <p>Intellectual Property</p>
         <p>Aviation</p>
         <p>Maritime</p>
         <p>Tax Matters/Agents</p>
         <p>International Legal Consultants/Advisory</p>
         <p>Legal Training</p>
         <p>Arbitration And Reconciliation</p>
         <p>Election Petition/Election Petition Matters</p>
         </div>
         <div>
          <img className=" py-20 w-[350px] mx-auto my-4 " src={scale} alt="/" />
         </div>
         </div>
         <Newsletter/>
    </div>
    </div>
  )
}

export default Practice