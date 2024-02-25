import React, { useState } from 'react';
import Okechukwupic from '../assets/Okechukwupic.png'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

function Okechukwu() {
  const [status, setStatus] = useState("Submit");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      selectedOption: selectedOption,
    };
    try {
      let response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setStatus("Sent");
      let result = await response.json();
      alert("Form successfully submitted");
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setStatus("Submit");
      alert("Failed to submit the form. Please try again.");
    }
  };
  return (
     <div className='font-Montserrat'>
      <Navbar/>
        <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        Partner</h1>
        </div>
         <div className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black'>
      <div className='py-20 px-20'>
        <h2 className='font-bold text-2xl'>OKECHUKWU GEORGE EDEZE LL.B, BL, LL.M (NOTARY PUBLIC) </h2>
        <h3 className='outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4 font-bold text-l'>Principal Partner</h3>
        <h2 className='font-bold py-10'>Background</h2>
        <p className='text-sm'>Okechukwu Edeze obtained his LL.B from Ahmadu Bello University, Zaria in 2005. He was called to the Nigerian Bar in 2006. He obtained his LL.M (Investment Law) from Ahmadu Bello University, Zaria in 2011 and is currently a Ph.D Student at the same University. 
He has been in full time legal practice since his call to Bar. He joined the prestigious law firm of Mahmud & Co in 2017.</p>


<h2 className='font-bold text-xl py-4'>Education</h2>
   <ul className="list-disc pl-4  py-4 px-4  text-sm">
                   <li>Ahmadu Bello University, Zaria LLB., LLM </li>
                   <li>Nigerian Law School, BL.</li> 
                   </ul>
<h2 className='font-bold text-xl py-4'>Practice Areas</h2>
 <ul className="list-disc pl-4  py-4 px-4  text-sm">
                   <li>Civil Litigation</li>
                   <li>Criminal Litigation</li>
                   <li>ADR</li> 
                   <li>Corporate Practice</li>
                   <li>Appellate Practice</li>
                   <li>Election matters </li>
                   <li>Arbitration And Other Adr Modes.</li>
                   </ul>
 </div>
<div><img className="w-[350px] mx-auto my-4 py-10 " src={Okechukwupic} alt="/" />
<h2 className='font-semibold px-20 text-2xl'>Contact Lawyer</h2>
 <form className='flex flex-col justify-center items-center mx-auto py-4' onSubmit={handleSubmit}>

  <div className=" py-10  grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
    <input
      className='px-4  outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4'
      placeholder='Type your name..'
      name='name'
      required
    />

    <input
      className='  mx-3 outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4'
      placeholder='Type your email...'
      name='email'
      required
    />
  </div>

  <label className="text-[#C3BDBD] mt-4">Area Advisory</label>

  <select
    onChange={handleInputChange}
    className="p-2 text-[#C3BDBD] rounded-full w-[300px] ml-4 my-6 px-6 py-2 border border-[#C3BDBD] focus:border-white"
    name="areaAdvisory"
  >
    <option value="">Select an area</option>
    {["Business Law", "Corporate Law", "Criminal Law"].map((option) => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
  <label className='text-[#C3BDBD] my-4  '>Area Advisory</label>
        <textarea
            cols='10'
            rows='10'
            placeholder='Type something'
            className='resize-none border rounded w-[300px] h-[150px] border-[#C3BDBD] focus:border-gray-400 outline-none p-2'
        ></textarea>

  <button
    type="submit"
    className='bg-[#000000] text-[#FFFFFF] rounded-full font-medium w-[100px] ml-4 my-6 px-6 py-2'
  >
    {status}
  </button>

</form>

</div>

     
      </div>
        <Newsletter/>
        <Footer/>
        </div>
  )
}

export default Okechukwu;