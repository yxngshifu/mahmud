import React, { useState } from 'react';
import efutpic from '../assets/efutpic.png'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

function Efut() {
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
         Head of Department</h1>
        </div>
         <div className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black'>
      <div className='py-20 px-20'>
        <h2 className='font-bold text-2xl'>EFUT OKOI LL.B, BL</h2>
        <h3 className='outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4 font-bold text-l'>Principal Partner</h3>
        <h2 className='font-bold py-10'>Background</h2>
        <p className='text-sm'>Efut Okoi is a Legal Practitioner with Extensive experience in Litigation, Legal Research and Policy Development. He received his Law Degree from University of Calabar in 2006 and proceeded to Nigerian Law School Enugu Campus in 2007 where he obtained his BL in 2008. He further observed his compulsory National Youth Service Corps in Abia State where he was posted to the Ministry of Justice Umuahia and was thereafter redeployed to the department of Civil Litigation. Upon his completion of his National Youth Service Corp in 2009, he was employed as a junior counsel with Professor Tony Ukam & Associates in Calabar Cross River State. 
Efut Later joined the service of Mahmud (San) & Co in Abuja as a Counsel in 2010 and he is a core member of the Litigation team of the firm with vast experience in several high profile cases in both trial and Appellate Courts.</p>


<h2 className='font-bold text-xl py-4'>Education</h2>
   <ul className="list-disc pl-4  py-4 px-4  text-sm">
                   <li>University of Calabar, LLB. </li>
                   <li>Nigerian Law School, BL.</li> 
                   </ul>
<h2 className='font-bold text-xl py-4'>Practice Areas</h2>
 <ul className="list-disc pl-4  py-4 px-4  text-sm">
                   <li>Taxation</li>
                   <li>Corporate-commercials</li> 
                   <li>Regulatory Compliance</li>
                   <li>Public policy Development</li>
                   <li>Maritime Law &amp; Practice and General Litigation</li>
                   </ul>
 </div>
<div><img className="w-[350px] mx-auto my-4 py-10 " src={efutpic} alt="/" />
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

export default Efut;