import React, { useState } from 'react';
import Footer from '../components/Footer'
import construction from '../assets/construction.png'
import Navbar from '../components/Navbar';

function Diversity() {
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
        Diversity</h1>
        </div>
        <div className='py-20 px-20'>
            <img className="w-[650px] mx-auto my-4 py-10 " src={construction} alt="/" ></img>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu lorem ultricies arcu. Fusce sed enim venenatis, interdum lorem eget, semper dolor. Praesent nisi diam, varius et pretium in, venenatis sed enim. Nullam feugiat euismod nulla, nec eleifend eros tincidunt et. Nulla mattis lacus nec nulla auctor, in tempus velit iaculis. Praesent risus libero, sodales id risus nec, rutrum consectetur quam. Curabitur tincidunt est
             eget nulla semper elementum. Nam vulputate fringilla ligula ac commodo.
             .</p>

             <h2>Apply Now</h2>
             <form className='flex flex-col justify-center items-center mx-auto py-20' onSubmit={handleSubmit}>
         <p>Your Email Address will not be published.Required fields are marked*</p>
        <textarea
            cols='10'
            rows='10'
            placeholder='Your comment*'
            className='resize-none border rounded w-[300px] h-[150px] border-[#C3BDBD] focus:border-gray-400 outline-none p-2'
        ></textarea>
        <div className=" py-10  grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
    <input
      className='px-4  outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4'
      placeholder='Type your name..*'
      name='name'
      required
    />

    <input
      className='  mx-3 outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4'
      placeholder='Type your email...*'
      name='email'
      required
    />
    <input
      className='  mx-3 outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4'
      placeholder='Website*'
      name='email'
      required
    />
  </div>

  <button
    type="submit"
    className='bg-[#000000] text-[#FFFFFF] rounded-full font-medium w-[100px] ml-4 my-6 px-6 py-2'
  >
    {status}
  </button>

</form>

        <Footer/>
        </div>
  )
}

export default Diversity