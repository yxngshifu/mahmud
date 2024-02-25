import React from 'react'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import Footer from './Footer'

function Why() {
  return (
    <div className='font-Montserrat'>
      <Navbar/>
        <div className="  flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        Why M.A Mahmud & Co.</h1>
        </div>
         <div className=' '>
            <div className='w-full flex justify-between items-center  md:flex-row flex-col  border-t-[1px] border-t-[#3F3E45]'></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-20 px-40"> 
            <div >
        <h2 class="text-l font-bold mb-4">01 Specialised Expertise</h2>
        <p className='text-[#5C5A5A]'>Our team comprises legal professionals with a diverse range of expertise, ensuring that we don't just understand the law broadly but excel in various specialised practice areas. Whether it's corporate law, litigation, intellectual property, or any other field,
         our depth of knowledge ensures that you receive tailored and effective legal solutions</p> </div>
    <div>
        <h2 class="text-l font-bold mb-4 ">02 Client-Centered Focus</h2>
        <p className='text-[#5C5A5A]'>We understand that legal issues are inherently personal. That's why our client-centred approach goes beyond merely addressing legal complexities. We take the time to understand your individual goals, concerns, and long-term objectives. This personalised understanding allows us to tailor our legal strategies to align seamlessly with your unique needs.
</p> 
         </div>
         <div className=' border-t-[1px] border-t-[#3F3E45]'></div>
          <div className=' border-t-[1px] border-t-[#3F3E45]'></div>
          <div>
        <h2 class="text-l font-bold mb-4">03 Proven Track Record</h2>
        <p className='text-[#5C5A5A]'>Actions speak louder than words, and our track record is a testament to our commitment to achieving positive outcomes for our clients. Successful cases and satisfied clients have become the hallmark of [Law FirmName], reinforcing our reputation as a reliable and effective legal partner.
</p> 
         </div>
          <div>
        <h2 class="text-l font-bold mb-4">04 Global Insight</h2>
        <p className='text-[#5C5A5A]'>Living in an interconnected world demands legal insight that transcends borders. Our firm offers a global perspective, particularly beneficial for international and cross border legal matters. We navigate the complexities of the global legal landscape, providing you with nuanced solutions that consider the broader context.
</p> 
         </div>
         <div className=' border-t-[1px] border-t-[#3F3E45]'></div>
          <div className=' border-t-[1px] border-t-[#3F3E45]'></div>
          <div>
        <h2 class="text-l font-bold mb-4">05 Innovative Approach </h2>
        <p className='text-[#5C5A5A]'>We are not just legal practitioners; we are innovators in our field. [Law Firm Name] leverages cutting-edge technology, adopts forward-thinking strategies, and embraces innovation. This ensures that our legal solutions are not only efficient but also adaptive to the ever-evolving legal landscape.</p> 
         </div>
    <div>
        <h2 class="text-l font-bold mb-4">06 Clear and Open Communication</h2>
        <p className='text-[#5C5A5A]'> Communication is the backbone of any successful legal partnership. We prioritise transparent and open communication, keeping you informed at every stage of the legal process. This not only builds trust but empowers you to make informed decisions about your legal matters.
</p>
    </div>
    <div className=' border-t-[1px] border-t-[#3F3E45]'></div>
          <div className=' border-t-[1px] border-t-[#3F3E45]'></div>
      <div>
        <h2 class="text-l font-bold mb-4">07 Integrity and Trust </h2>
        <p className='text-[#5C5A5A]'> Upholding the highest ethical standards is not just a commitment; it's a cornerstone of our identity. We believe in doing what is right, not just legally but ethically. This commitment to integrity fosters a relationship built on trust and reliability, essential elements in any enduring legal partnership.
</p> 
         </div> 
    </div>
         <div className='w-400 mb-4 flex justify-between items-center  md:flex-row flex-col  border-t-[1px] border-t-[#3F3E45]'></div>
         
        </div>
           <Newsletter/>
        <Footer/>
        </div>
     
        
     
  )
}

export default Why