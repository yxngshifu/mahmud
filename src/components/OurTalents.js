
import React from 'react';
import person1 from '../assets/person1.png';
import Okechukwupic from '../assets/Okechukwupic.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';

import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { LuChevronRightCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Okechukwu from '../Pages/Okechukwu';

const OurTalents = () => {
  return (
    <div>
      <Navbar/>
       <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        Our Talents</h1>
        </div>
    <div>
         <p className='py-20 px-20 mx-20 font-bold'> We are a market-leading, nationally-recognised firm for all your legal needs.
          Our lawyers provide customer centric advice to corporations and individuals 
          across the world.</p>
    
    <div className="flex flex-row"> 
    
     <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">MAHMUD ABUBAKAR MAGAJI, SAN</p>
        <p className='text-sm'>Principal Partner</p>
        <Link to='/mahmud'>
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
         <p className="text-black">OKECHUKWU GEORGE EDEZE LL.B, BL, LL.M (NOTARY PUBLIC) </p>
        <p className='text-sm'> Partner</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={Okechukwupic}
          alt="Profile"
        />
        </div>
     
    </div>
     <div className="flex flex-row"> 
    
     <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">John Doe</p>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={person3}
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

export default OurTalents;
