
import React from 'react';
import danjumapic from '../assets/danjumapic.png';
import Hauwapic from '../assets/Hauwapic.png';
import Hamidupic from '../assets/Hamidupic.png';
import ridwanpic from '../assets/ridwanpic.png';
import kabirpic from '../assets/kabirpic.png';
import comfortpic from '../assets/comfortpic.png';
import clementpic from '../assets/clementpic.png';
import edepic from '../assets/edepic.png';
import edetpic from '../assets/edetpic.png';
import udzahupic from '../assets/udzahupic.png';
import chimapic from '../assets/chimapic.png';
import munakupic from '../assets/munakupic.png';

import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Footer from './Footer';
import { LuChevronRightCircle } from "react-icons/lu";
import { Link } from 'react-router-dom';


const SeniorCounsel = () => {
  return (
    <div>
      <Navbar/>
       <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        Senior Counsel</h1>
        </div>
    <div>
         <p className='py-20 px-20 mx-20 font-bold'> We are a market-leading, nationally-recognised firm for all your legal needs.
          Our lawyers provide customer centric advice to corporations and individuals 
          across the world.</p>
    
   
     <div className="flex flex-row"> 
     
     <div className="bg-[#FFF1C6]  p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black ">DANJUMA G. AYEYE, ESQ. LL.B, BL.</p>
        <p className='text-sm'>SENIOR COUNSEL</p>
        <Link to='/mahmud'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={danjumapic}
          alt="Profile"
        />
       
      </div>
      <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
         <p className="text-black">HAUWA TUMAKA YUSUF LL.B, BL</p>
        <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={Hauwapic}
          alt="Profile"
        />
      
    </div>
    </div>
  
     <div className="flex flex-row"> 
     <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">HAMIDU MOHAMMED TUKUR, ESQ.</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={Hamidupic}
          alt="Profile"
        />
      </div>
      <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">RIDWANULLAHI ADEDEJI BAMIGBOYE LL.B, BL</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={ridwanpic}
          alt="Profile"
        />
        </div>
        </div>
        
         <div className="flex flex-row"> 
        <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">ABDULKABIR ABIODUN BADMOS LL.B, BL</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={kabirpic}
          alt="Profile"
        />
        </div>
        <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">COMFORT BUNMI ASHAOLU LL.B B.L</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={comfortpic}
          alt="Profile"
        />
        </div>
        </div>
      
        </div>
        <div className="flex flex-row"> 
        <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">CLEMENT OPU IJOM LL.B, BL</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={clementpic}
          alt="Profile"
        />
        </div>
        <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">EDE UKO, ESQ LL.B, BL</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={edepic}
          alt="Profile"
        />
        </div>
      </div>
       <div className="flex flex-row"> 
         <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">EDET UDO AKPAN LL.B, BL</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={edetpic}
          alt="Profile"
        />
        </div>
         
         <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">UDZAHU MEDUGU LLB, BL, MBCL,</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={udzahupic}
          alt="Profile"
        />
        </div>
        </div>
        <div className="flex flex-row"> 
          <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">CHIMA CHIEMEZIE OBIH LL.B, BL</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={chimapic}
          alt="Profile"
        />
        </div>
       
      
       <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">MUNAKUR GREMA MODU LL.B, BL</p>
         <p className='text-sm'> SENIOR COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={munakupic}
          alt="Profile"
        />
    </div>
    </div>
    <Newsletter/>
    <Footer/>
    </div>
    
    
  );
};

export default SeniorCounsel;
