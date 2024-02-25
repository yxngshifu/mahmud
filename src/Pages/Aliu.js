import React, { useState } from 'react';
import aliupic from '../assets/aliupic.png'
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
        <h2 className='font-bold text-2xl'>ALIYU D. HUSSAIN LL.B, BL</h2>
        <h3 className='outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4 font-bold text-l'>Principal Partner</h3>
        <h2 className='font-bold py-10'>Background</h2>
        <p className='text-sm'>Aliyu D. Hussain obtained his L.L.B from Ahmadu Bello University (A.B.U) Zaria, Kaduna State in 2007. He attended the Nigerian law School Agbani, Enugu State and was called to the Nigerian Bar in 2008. 
Aliyu commenced his career during his Youth Corp Service year in the office of Longe & Longe Associates (Agbeja Chambers) in Ikole-Ekiti, Ekiti State in 2009. He then proceeded to join the office of Hussaini Omar Garba & Co. (Halal Chambers) from 2010- January 2014. He is presently a legal practitioner with Mahmud & Co. and the coordinator of inferior courts.  Aliyu has under gone a wide range of training under the platform of the Legal Clinic, an initiative established to provide free legal advice to impecunious persons in need of legal services. He has also participated in numerous seminars organized by the National Drug Law Enforcement Agency (N.D.L.E.A) to curb the widespread abuse of substance by youths.</p>
  <h2 className='font-bold text-xl py-4'>Education</h2>
   <ul className="list-disc pl-4  py-4 px-4  text-sm">
                   <li>Ahmadu Bello University (A.B.U), LLB.</li>
                   <li>Nigerian Law School, BL.</li> 
                   </ul>
<h2 className='font-bold text-xl py-4'>Practice Areas</h2>
 <ul className="list-disc pl-4  py-4 px-4  text-sm">
                   <li>Criminal Law and Litigation</li>
                   <li>Maritime Law</li> 
                   </ul>
 </div>
<div><img className="w-[350px] mx-auto my-4 py-10 " src={aliupic} alt="/" />
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