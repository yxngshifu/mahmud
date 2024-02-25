
import React from 'react';
import sorochukwupic from '../assets/sorochukwupic.png';
import benitapic from '../assets/benitapic.png';
import rabiupic from '../assets/rabiupic.png';
import hauwasulepic from '../assets/hauwasulepic.png';
import chiomaokerekepic from '../assets/chiomaokerekepic.png';
import fatimapic from '../assets/fatimapic.png';
import rufaidapic from '../assets/rufaidapic.png';
import firdausipic from '../assets/firdausipic.png';

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
        Counsel</h1>
        </div>
    <div>
         <p className='py-20 px-20 mx-20 font-bold'> We are a market-leading, nationally-recognised firm for all your legal needs.
          Our lawyers provide customer centric advice to corporations and individuals 
          across the world.</p>
    
   
     <div className="flex flex-row"> 
     
     <div className="bg-[#FFF1C6]  p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black ">NNAJI SOROCHUKWU HAPPINESS LL.B, BL</p>
        <p className='text-sm'>COUNSEL</p>
        <Link to='/mahmud'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={sorochukwupic}
          alt="Profile"
        />
       
      </div>
      <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
         <p className="text-black">BENITA O. ODIGIE LL.B, BL</p>
        <p className='text-sm'> COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={benitapic}
          alt="Profile"
        />
      
    </div>
    </div>
  
     <div className="flex flex-row"> 
     <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black"> RABIU SULEIMAN LL.B, BL</p>
         <p className='text-sm'> COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={rabiupic}
          alt="Profile"
        />
      </div>
      <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black"> HAUWA SULE IBRAHIM LL.B, B.L</p>
         <p className='text-sm'> COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={hauwasulepic}
          alt="Profile"
        />
        </div>
        </div>
        
         <div className="flex flex-row"> 
        <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">CHIOMA OKEREKE LL.B, B.L, LLM</p>
         <p className='text-sm'>COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={chiomaokerekepic}
          alt="Profile"
        />
        </div>
        <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black"> FATIMA GURAMA LL.B & SHARIA HONS, B.L </p>
         <p className='text-sm'> COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={fatimapic}
          alt="Profile"
        />
        </div>
        </div>
      
        </div>
        <div className="flex flex-row"> 
        <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black"> RUFAIDA ADAMU SALEH LLB, BL</p>
         <p className='text-sm'> COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={rufaidapic}
          alt="Profile"
        />
        </div>
        <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black"> FIRDAUSI IBRAHIM LL.B, BL</p>
         <p className='text-sm'> COUNSEL</p>
        <Link to='/okechukwu'>
        <LuChevronRightCircle name="rightcircleo" size={24} color="black" />
        </Link>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={firdausipic}
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
