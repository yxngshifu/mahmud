
import React from "react";
import { Link } from 'react-router-dom';
import logo11 from '../assets/logo11.png';


function Footer() {
	return (
		<>
			<div className=" h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 text-black">
				
				<div className="p-5 ">
						  <Link to="/" className="mt-16">
        <img className="w-[120px] mx-8  flex items-center " src={logo11} alt="/" />				
          </Link>
				</div>
			
					 <div className='w-full  flex justify-between items-center  md:flex-row flex-col  border-t-[1px] border-t-[#3F3E45]'>
				<div className="p-5 font-bold py-40 px-10 ">
					
					<ul>
						<p className=" text-2xl  pb-8">Quick Link</p>
						<li className=" text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							NEWS
						</li>
						<li className=" text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							OUR TALENT
						</li>
						<li className=" text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							ABOUT US
						</li>
						<li className="text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							NEWSLETTERS
						</li>
            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							PRIVACY POLICY
						</li>
					</ul>
				</div>
			
					<div className="py-40 px-10">
					<ul>
						<p className="font-bold text-2xl pb-8">Practice Area</p>
						<li className="text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							General Litigation
						</li>
						<li className=" text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							Energy Law
						</li>
						<li className="text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
						Financial Services
						</li>
						<li className=" text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							Human Right 
						</li>
						<li className=" text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							Intellectual Property
						</li>
					</ul>
					</div>
				
				<div className="py-40 px-10">
					<ul className="">
						<p className="font-bold text-2xl pb-8">Contact Us</p>
						<li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							No. 9 Bozoum Close, Off Adetokunbo Ademola, Behind AP Plaza,  Wuse II,  Abuja.
						</li>
						<li className=" text-md pb-6 font-semibold hover:text-blue-600 cursor-pointer">
							 (+234) 8033 1171 97
						</li>
						<li className=" text-md pb-5 font-semibold hover:text-blue-600 cursor-pointer">
							rahusachamberssan@gmail.com 
						</li>
						<li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						rahusachambers@yahoo.com
						</li>
						<li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center px-80 mr-20 mb-20 text-center  p-5 bg-gray-50">
				 <div className='w-full flex justify-between items-center  md:flex-row flex-col  border-t-[1px] border-t-[#3F3E45]'></div>
				<h1 className=" text-gray-800   py-20 font-semibold">
					© 2024 Asteria. All rights reserved 
					
				</h1>
			</div>
		</>
	);
}

export default Footer;