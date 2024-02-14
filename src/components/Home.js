import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import order from '../assets/order.png'
import Newsletter from './Newsletter'
import { Link } from 'react-router-dom';
import Peoplelist from './Peoplelist';

function Home() {
  return (
    <div className='font-Montserrat'>
        <Navbar/>
        <Hero/>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0  bg-[#FFF1C6] text-black'>
            <h1 className='font-bold text-2xl py-20 px-40 '>About The Firm.</h1>
            <p className='py-20 px-40'>M.A. Mahmud SAN & Co is a leading cross border law firm dedicated to providing tailored legal services, creating timely and efficient legal solutions. 
             Our team of professionals are characterised by their scholastic background from reputable Universities and possess excellent reputation for quality service delivery and strict adherence ethical standards.
            <div className='font-bold'> <Link to="about">Read more</Link></div>
             </p>
              
        </div>
        <div>
            <h1 className='px-20'> Our Practice Areas  <Link to="practice" className='font-bold   px-80'>Read more</Link> </h1>
            <div className='w-full flex justify-between items-center  md:flex-row flex-col  border-t-[1px] border-t-[#3F3E45]'></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-20 px-40"> 
            <div >
        <h2 class="text-l font-bold mb-4">01 General Litigation</h2>
        <p>At our law firm, our experienced team of litigators is dedicated to providing comprehensive General Litigation services tailored to meet the diverse legal needs of our clients.</p>
    </div>
    <div>
        <h2 class="text-l font-bold mb-4">02 Energy Law</h2>
        <p>Discover unparalleled legal support in the energy sector at M.A Mahmud SAN & Co.</p> 
         </div>
          <div>
        <h2 class="text-l font-bold mb-4">03 Financial Services</h2>
        <p>Our dedicated team specialises in a range of financial matters, ensuring robust legal support tailored to your unique needs.</p> 
         </div>
          <div>
        <h2 class="text-l font-bold mb-4">04 Security regulations</h2>
        <p>Your go-to partner for SecuritiesRegulation.</p> 
         </div>
          <div>
        <h2 class="text-l font-bold mb-4">05 Economic Regulations</h2>
        <p>Ensuring your business aligns with evolving economic regulations is crucial.</p> 
         </div>
    <div>
        <h2 class="text-l font-bold mb-4">06 IT & Telecommunication</h2>
        <p>Our dedicated team specializes in IT and Telecommunication law, offering comprehensive legal services tailored to the dynamic landscape of technology and communications.</p>
    </div>
      <div>
        <h2 class="text-l font-bold mb-4">07 Property law & conveyance</h2>
        <p>Our team specialises in providing comprehensive services tailored to the complexities of real estate transactions.</p> 
         </div>
          <div>
        <h2 class="text-l font-bold mb-4">08 human right</h2>
        <p>We specialise in providing comprehensive legal services to individuals and organisations striving to uphold and protect human rights.</p> 
         </div>
         <div>
        <h2 class="text-l font-bold mb-4">09 intellectual property</h2>
        <p>Our seasoned teamspecializesinsafeguarding your creative and innovative assets.</p> 
         </div>
          <div>
        <h2 class="text-l font-bold mb-4">10 avaition</h2>
        <p>Your destination for expert guidance inAviationLaw.Our dedicated legal team specialises in navigating the complexities of the aviation industry.</p> 
         </div>
    </div>
         
        </div>
        
        <div  className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0  bg-[#FFF1C6] text-black'>
            <div>
            <h1>Why M.A Mahmud & Co.</h1>
            <p>Our commitment to excellence, client-focused approach, andaproven track record set us apart as your premier legal partner.</p>
            </div>
            <div>
                 <img className="w-[350px] mx-auto my-4 " src={order} alt="/" />
            </div>
        </div>
        <Peoplelist/>
        <Newsletter/>
    </div>
  )
}

export default Home