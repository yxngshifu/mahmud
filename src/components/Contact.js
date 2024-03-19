import React, { useState } from 'react';
import Navbar from './Navbar';
import building from '../assets/building.png'
import Newsletter from './Newsletter';
import Footer from './Footer';

function Contact() {
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
    <div >
      <Navbar />
      <div className='font-Montserrat'>
        <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-full mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 lg:px-80'>
        Contact Us</h1>
        </div>
     <div className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black'>
      <div className='py-20 px-40'>
        <h2 className='font-semibold text-2xl'>Make An Enquiry?</h2>
        <p className='py-10'>M.A. Mahmud SAN & Co is a leading cross border law firm dedicated to providing tailored legal services,
          creating timely and efficient legal solutions. </p>
       <form className='flex flex-col justify-center items-center mx-auto py-20' onSubmit={handleSubmit}>

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
        <div className='py-20 px-20'>
          <div>
            <h1 className='text-xl py-5 '>Location</h1>
            <p className='text-[#5C5A5A]'>No. 9 Bozoum Close, Off Adetokunbo Ademola, Behind AP Plaza, Wuse II, Abuja.</p>
          </div>
          <div>
            <h1 className='text-xl py-5 '>Phone</h1>
            <p className='text-[#5C5A5A]'>(+234) 8033 1171 97</p>
          </div>
          <div>
            <h1 className='text-xl py-5 '>Email</h1>
            <p className='text-[#5C5A5A]'>rahusachamberssan@gmail.com rahusachambers@yahoo.com</p>
          </div>
           <div><img className="w-[350px] py-20" src={building} alt="/" /></div>
        </div>
        <div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
      </div>
      </div>
   
  );
}

export default Contact;
