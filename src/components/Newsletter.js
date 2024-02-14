import React from 'react'

function Newsletter() {
  return (
    <div className='bg-[#FFF1C6] text-[#000000] text-center py-4 font-Montserrat'>
    <h1>Subscribe to Newsletters</h1>
    
        <input
            className='p-2 bg-[#FFF1C6] text-[#FFFFFF] rounded-full font-medium w-[300px] ml-4 my-6 px-6 py-2 border border-black focus:border-white'
            type='email'
            placeholder='Enter Email'
        />
        <button className='bg-[#000000] text-[#FFFFFF] rounded-full font-medium w-[120px] ml-3 my-6 px-4 py-2 '>
            Subscribe
        </button>
    
</div>


  )
}

export default Newsletter