import React from 'react'
import {FaStar} from "react-icons/fa"
const Testimony = () => {
  return (
    <section>
        <div>
            <h1 className='max-w-[760px] text-[#23262F] text-[45px] text-center ml-auto mr-auto mt-24'>Here's What Our Satisfied Clients Are Saying</h1>
            <div className='flex flex-row'>
            <div className='relative flex max-w-[900px] ml-auto mr-auto mt-10'>
            <div className='bg-[#23262F] rounded-[15px] z-[999px] max-w-[673px] flex justify-center flex-col gap-5 p-5'>
                <small className='text-[#C5C5C5]'>
                I couldn't be happier with the work done by
                 [Your Company Name]. They listened to my needs, 
                 provided exceptional design options, and executed everything flawlessly. My home now feels both beautiful and functional. I highly recommend 
                their services to anyone looking to elevate their living space.
                </small>
                <div className='text-white flex gap-2 items-center text-sm'>
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
                <img src="./testimony.PNG" alt="" width={500} height={800} className='w-[477px] h-[600px]'/>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Testimony