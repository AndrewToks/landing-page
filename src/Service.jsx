import React from 'react'
import {RiServiceLine} from "react-icons/ri"
import { BsPeopleFill } from "react-icons/bs";

const Service = () => {
  return (
    
    <section id='project' className='bg-[#23262F] text-white p-5 flex flex-col justify-center items-center mt-10'>
        <main className='flex flex-col gap-10'>
          <h1 className='text-[40px] max-w-[764px] text-center ml-auto mr-auto'>
            We Offer More Than Customer Satisfaction
          </h1>
          <div className='max-w-[1003px] h-[192px] flex justify-center items-center gap-[140px]'>
            <article className='max-w-[253px] h-[192px] flex flex-col items-center gap-4'>
            <RiServiceLine className='bg-[#32342D] p-4 rounded-full text-[#EDAB42]' size={50}/>
              <h3 className='text-[#DCDCDC] text-[20px]'>Premium Service</h3>
              <small className='text-[#C5C5C5] text-center max-w-[253px] h-[72px] text-[15px] lg:text-[16px]'>From concept to completion,we handle every detail with precision and passion</small>
            </article>
            <article className='max-w-[253px] h-[192px] flex flex-col items-center gap-4'>
            <RiServiceLine className='bg-[#32342D] p-4 rounded-full text-[#EDAB42]' size={50}/>
              <h3 className='text-[#DCDCDC] text-[20px]'>Premium Service</h3>
              <small className='text-[#C5C5C5] text-center max-w-[253px] h-[72px] text-[15px] lg:text-[16px]'>From concept to completion,we handle every detail with precision and passion</small>
            </article>
            <article className='max-w-[253px] text-center h-[192px] flex flex-col items-center gap-4'>
            <BsPeopleFill  className='bg-[#32342D] p-4 rounded-full text-[#EDAB42]' size={50}/>
              <h3 className='text-[#DCDCDC] text-[20px]'>Trusted Partners</h3>
              <small className='text-[#C5C5C5] max-w-[253px] h-[72px] text-[15px] lg:text-[16px]'>Partnering with industry leaders to deliver excellence in every project</small>
            </article>
          </div>
        </main>
    </section>
  )
}

export default Service