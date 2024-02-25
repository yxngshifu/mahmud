
import React from 'react';
import person1 from '../assets/person1.png';
import efutpic from '../assets/efutpic.png';
import aliupic from '../assets/aliupic.png';
import person4 from '../assets/person4.png';

import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { LuChevronRightCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Hod = () => {
  return (
    <div>
      <Navbar/>
       <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        Heads of Departments</h1>
        </div>
    <div>
         <p className='py-20 px-20 mx-20 font-bold'> We are a market-leading, nationally-recognised firm for all your legal needs.
          Our lawyers provide customer centric advice to corporations and individuals 
          across the world.</p>
    
    <div className="flex flex-row"> 
    
     <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">AMINA1 T. ZUKOGI LL.B, BL, LL.M (NOTARY PUBLIC)</p>
        <p className='text-sm'>HOD of IT/Research Department</p>
        <Link to='/amina'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={person1}
          alt="Profile"
        />
      </div>
      <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
         <p className="text-black">EFUT OKOI LL.B, BL</p>
        <p className='text-sm'> HOD</p>
        <Link to='/efut'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={efutpic}
          alt="Profile"
        />
        </div>
     
    </div>
     <div className="flex flex-row"> 
    
     <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">ALIYU D. HUSSAIN LL.B, BL</p>
         <p className='text-sm'> HOD(CRIMINAL LITIGATION)</p>
        <Link to='/aliu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={aliupic}
          alt="Profile"
        />
      </div>
      <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">John Doe</p>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={person4}
          alt="Profile"
        />
        </div>
     
    </div>
    
    </div>
    <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Hod;
