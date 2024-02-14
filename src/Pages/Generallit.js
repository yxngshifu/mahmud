import React from 'react'
import Navbar from '../components/Navbar'
import ppl from '../assets/ppl.png'

function Generallit() {
  return (
    <div>
     <Navbar/>
     <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        General Litigation</h1>
        </div>
          <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0  bg-[#FFF1C6] text-black'>
           <div>
          <img className=" py-20 w-[350px] mx-auto my-4 " src={ppl} alt="/" />
          <p>
            At our law firm, our experienced team of litigators is dedicated to providing comprehensive General Litigation services tailored to meet the diverse legal needs of our clients. 
            At M.A Mahmud SAN & Co we understand that each legal dispute is unique, requiring a personalised approach. Our commitment to excellence, attention to detail,and strategic advocacy set us apart. 
            Whether through negotiation, alternative dispute resolution, or courtroom litigation,we are relentless in pursuing the best possible outcome for our clients.
          </p>
         </div>
         <div>
            <h2>Lawyers</h2>
            <ul class="list-disc">
               <li>Issa Aba</li>
               <li>John Doe</li>
               <li>Hazana Afis</li>
    
               </ul>

         </div>
          </div>
        </div>
  )
}

export default Generallit