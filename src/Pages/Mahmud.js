import React, { useState } from 'react';
import person1 from '../assets/person1.png'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

function Mahmud() {
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
        Principal Partner</h1>
        </div>
         <div className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black'>
      <div className='py-20 px-20'>
        <h2 className='font-bold text-2xl'>MAHMUD ABUBAKAR MAGAJI, SAN</h2>
        <h3 className='outline-none border-b border-[#C3BDBD] focus:border-gray-400 mt-4 font-bold text-l'>Principal Partner</h3>
        <h2 className='font-bold py-10'>Background</h2>
        <p className='text-sm'>Mahmud Abubakar Magaji, SAN obtained a diploma in Law in 1985 and an LLB in 1989 from University of Maiduguri. He was called to the Nigeria Bar in 1990. He also won the best prize for Criminal Law.
Mahmud Abubakar Magaji has practiced extensively before all the Superior Courts of records in Nigeria on matters relating to Labour, Employment, Capital Market, Telecommunication, Law of Contracts, Taxation, Banking and Finance as well as Election related matters. He also renders advisory services to Financial Institutions, Corporate Organizations, Government Agencies and Multinational Companies.
He has held several positions including Executive Secretary, Niger States Pilgrims Welfare Board, Secretary/Legal Adviser, Kabo Holdings. He is Chairman of Niger State Basket Ball Association; Member New York Council of Arbitration; Member International Institute of Arbitration, London; Member Advocate for Societal and Intellectual Development (A.S.I.D); Member FCT Judicial Service Commission; Member Nigeria Bar Association Group Affinity Plan; Member Institute of Management Consultants (IMC-Nigeria); He was also appointed by the Chief Justice of Nigeria as Assessor to the Governing Bopard Disciplinary Committee of the Medical Laboratory Science Council of Nigeria (MLSCN). He is currently the Principal of Mahmud &Co., a burgeoning law firm with outstanding Legal team he heads with a reputable legal resource
Mahmud A. Magaji, SAN has handled a wide range case bothering on Constitutional, Criminal and Civil Law. He is also a vast in Alternative Dispute Resolution. Being a Trial Lawyer with astute advocacy skill, this he brings to bare in his expertise in the various trials and advocacy he has handled over the years. 
Mahmud Abubakar Magaji’s SAN practice emphasizes business, civil, criminal litigation, ADR, Corporate/real estates, Oil and Gas, Election matters and Criminal matters. His representative clients include leaders, developers, lessors, investors, corporations and creditors. </p>


  <h2 className='font-bold text-xl py-10'>Education</h2>
  <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel 

sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu lorem ultricies arcu. Fusce sed enim venenatis, interdum lorem eget, semper dolor. Praesent nisi

diam, varius et pretium in, venenatis sed enim. Nullam feugiat euismod nulla, nec eleifend eros tincidunt et. Nulla mattis lacus nec nulla auctor, in 

tempus velit iaculis. Praesent risus libero, sodales id risus nec, rutrum consectetur quam. Curabitur 
</p>
<h2 className='font-bold text-xl py-4'>Practice Areas</h2>
 <ul className="list-disc pl-4  py-4 px-4  text-sm">
                   <li>Civil Litigation</li>
                   <li>Criminal Litigation</li>
                   <li>ADR</li> 
                   <li>Corporate/real estates</li>
                   <li>Oil and Gas</li>
                   <li>Election matters </li>
                   </ul>
 </div>
<div><img className="w-[350px] mx-auto my-4 py-10 " src={person1} alt="/" />
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

export default Mahmud;