import React from 'react'
import {FaStar} from "react-icons/fa"
import { ImQuotesLeft } from "react-icons/im";
const Testimony = () => {
  return (
    <section>
        <div>
            <h1 className='max-w-[760px] text-[#23262F] text-[24px]  lg:text-[45px] text-center ml-auto mr-auto mt-24'>Here's What Our Satisfied Clients Are Saying</h1>
            <div className='max-w-[900px] ml-auto mr-auto mt-16 flex-col lg:flex lg:flex-row justify-center items-center p-5'>
            <div>
            <div className='bg-[#23262F] mb-5 rounded-[15px] relative lg:left-20 z-[999px] max-w-[673px] h-[300px] flex justify-center flex-col gap-5 p-3'>
            <ImQuotesLeft className='text-[#EDAB42]' size={50}/>
                <small className='text-[#C5C5C5] text-[16px]'>
                I couldn't be happier with the work done by
                 [Your Company Name]. They listened to my needs, 
                 provided exceptional design options, and executed everything flawlessly. My home now feels both beautiful and functional. I highly recommend 
                their services to anyone looking to elevate their living space.
                </small>
                <div className='text-white flex gap-2 items-center text-sm mb-5'>
                <p>Femi</p>
                    <span className='flex gap-1'>
                        <FaStar className='text-[#EDAB42]'/>
                        <FaStar className='text-[#EDAB42]'/>
                        <FaStar className='text-[#EDAB42]'/>
                        <FaStar className='text-[#EDAB42]'/>
                        <FaStar className='text-white'/>
                    </span>
                </div>
            </div>
            </div>
            <div>
                <img src="./testimony.PNG" alt="" width={300} height={300} className='w-[550px] h-[500px] rounded-[15px]'/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Testimony