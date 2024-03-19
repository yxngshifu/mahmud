import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo11 from '../assets/logo11.png';


const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  

  return (
    <div
      className="relative inline-block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button className="p-4 hover:text-[#CDA233] focus:outline-none">Our Talents</button>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white border rounded-md shadow-md text-[#adb5bd]">
          <ul>
            <li className="p-2 hover:bg-[#CDA233] ">
              <Link to="/ourtalents">
                Principal Partner
              </Link>
            </li>
            <li className="p-2 hover:bg-[#CDA233] ">
              <Link to="/okechukwu" onClick={closeDropdown}>
                Partners
              </Link>
            </li>
            <li className="p-2 hover:bg-[#CDA233] ">
              <Link to="/hod" onClick={closeDropdown}>
                Head of Department
              </Link>
            </li>
             <li className="p-2 hover:bg-[#CDA233] ">
              <Link to="/seniorcounsel" onClick={closeDropdown}>
                Senior Counsel
              </Link>
            </li> <li className="p-2 hover:bg-[#CDA233] ">
              <Link to="/counsel" onClick={closeDropdown}>
                Counsel
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-opacity-90 h-24 max-w-full mx-auto  text-[#adb5bd]">
      <Link to="/" className="mt-16">
        <img className="w-[120px] mx-8 my-4 flex items-center " src={logo11} alt="/" />
      </Link>

      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#CDA233]">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-4 hover:text-[#CDA233]">
          <Link to="/why">Why M.A Mahmud & Co.</Link>
        </li>
        <DropdownMenu /> {/* Replace "Our Talent" with the DropdownMenu component */}
        <li className="p-4 hover:text-[#CDA233]">
          <Link to="/practice">Our Practice Areas</Link>
        </li>
        <li className="p-4 hover:text-[#CDA233]">
          <Link to="/insights">Insights</Link>
        </li>
        <li className="p-4 hover:text-[#CDA233]">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="p-4">Hire Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
