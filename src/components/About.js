import React from 'react'
import Navbar from './Navbar'
import Newsletter from './Newsletter'
import court from '../assets/court.png'
import woman from '../assets/woman.png'
import woman2 from '../assets/woman2.png'
import Footer from './Footer'

function About() {
 
  return (
   <div className='font-Montserrat'>
          <Navbar/>
        <div className=" flex justify-between items-center bg-opacity-90 h-24 max-w-[1240px] mx-auto px-4 text-[#FFFFFF] bg-black font-bold text-4xl ">
      <h1 className='py-10 px-60'>
        About Us</h1>
        </div>
          <div><img className="object-cover h-full w-full flex items-center justify-center" src={court} alt="/" /></div>
        <p className='py-20 px-12 mx-20 font-bold'>Our team of professionals are characterised by their scholastic background
           from reputable Universities and possess excellent reputation for quality
           service delivery and strict adherence ethical standards. </p>
         <div className='py-5 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black'>
            <div className=' px-20 '>
            <p className=''>M.A. Mahmud SAN & Co is a leading cross border law firm dedicated to providing 
              tailored legal services, creating timely and efficient legal solutions. Our team of
               professionals are characterized by their scholastic background from reputable Universities 
               and possess excellent reputation for quality service delivery and strict adherence ethical
                standards.
              <p className='mb-4'>Since its founding, the firm has represented Clients in a wide range of legal issues ranging from private individuals to small businesses, large corporations and the public sector. We value the trust our clients place on us and work hard to ensure effective representation to meet the diverse legal needs.
               We offer personalized services to suit our client’s needs.</p> 
            </p>
            </div>
            <div className=' px-20'>
            <p>
                M.A. Mahmud SAN & Co, provides expert and specialist legal support for individuals, small business, Corporate bodies, public sector and International Institutions. Our highly skilled team and front-line experience means we represent our clients with resilience and determination.
                At M.A. Mahmud SAN & Co, we have been able to protect and advance the interest of our clients across the globe and in broad range of legal matters. Our knowledge and experience providing to be of real benefit to our clients. Here at the firm, we have the reputation for protecting our clients’ interest.
            </p>
            </div>
         </div>
         <div>
            <h1 className='px-20  mx-20 font-bold text-2xl'>Company History</h1>
         </div>

         <div className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black'>
            <div>
            <h1 className='px-20 font-bold text-2xl'>Our Mission</h1>
           <ul className="list-disc pl-4  py-20 px-10 mx-20">
                   <li>Providing exceptional tailored legal services</li>
                   <li>Pioneering positive change in the legal industry</li>
                   <li>To build a formidable team with highly analytical skills</li>
                   <li>Customer-driven law firm providing timely and efficient services</li>
                   <li>Professional poise</li>
                   <li>Efficient service delivery and customer satisfaction</li>
                   </ul>
              <h1 className='px-20 font-bold text-2xl'>Our Vision</h1>
               <ul className="list-disc pl-4 py-10 px-10 mx-20">
                   <li>A topnotch law firm with exceptional standards.</li>
                </ul>
              </div>
               <div><img className="w-[350px] mx-auto my-4 " src={woman} alt="/" /></div>
         </div>

         <div className='py-5 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0   text-black'>
          
            <div><img className="w-[350px] mx-auto my-4 " src={woman2} alt="/" /></div>
              <div className='px-20' >
            <h1 className='font-bold text-2xl'>Our Values</h1>
            <div>
            <h3 className='font-bold text-2xl mb-4 py-4'>Integrity</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
               quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi
               vestibulum leo, ac luctus arcu 
               </p>
            </div>
            <div>
            <h3 className='font-bold text-2xl mb-4 py-4' >Competence</h3>
            <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi
                   vestibulum leo, ac luctus arcu 
                  </p>
                  </div>
                         <div>
                             <h3 className='font-bold text-2xl mb-4 py-4' >Diligence</h3>
                             <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi
                   vestibulum leo, ac luctus arcu 
                  </p>
                  </div>
                  <div>
                             <h3 className='font-bold text-2xl mb-4 py-4' >Professionalism</h3>
                            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                 quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi
                  vestibulum leo, ac luctus arcu 
                 </p>
                 </div>
            </div>
         </div>
       <div className='py-10 px-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0   text-center text-black'>
         <div>
        <h1 className='font-bold'> Cases Dismissed</h1>
        <p1 className='gap-1'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu 
                 </p1>
                         </div>
                         <div>
                         <h1 className='font-bold'>Cases won</h1>
                         <p1>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu 
                 </p1>
                         </div>
        <div>
        <h1 className='font-bold'>Awards</h1>
        <p1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis metus metus. Duis cursus, diam vel sollicitudin rhoncus, ex mi vestibulum leo, ac luctus arcu 
              </p1>
                      </div>
                     </div>
                     <Newsletter/>
                     <Footer/>
    </div>
  )
}

export default About