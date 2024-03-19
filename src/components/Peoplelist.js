// Peoplelist.js
import React from 'react';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';
import person4 from '../assets/person4.png';
import { Link } from 'react-router-dom';

const Peoplelist = () => {
  return (
    <div>
         <h1 className='px-20'> Our Talent  <Link to="talent" className='font-bold   px-80'>Read more</Link> </h1>
    
    <div className="flex flex-row"> 
    
     <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">John Doe</p>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={person1}
          alt="Profile"
        />
      </div>
      <div className="bg-[#FFF1C6] p-6 max-w-md w-80 h-80 mx-auto mb-4">
        <p className="text-black">John Doe</p>
      </div>
      <div className="">
        <img
          className="w-70 h-80 mx-auto mb-4 p-6 max-w-md"
          src={person2}
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
  );
};

export default Peoplelist;
