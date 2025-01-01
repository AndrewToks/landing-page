import React from 'react'
import {FaStar} from "react-icons/fa"
const Testimony = () => {
  return (
    <section>
        <div>
            <h1>Here's What Our Satisfied Clients Are Saying</h1>
            <div className='bg-[#23262F]'>
                <small className='text-[#C5C5C5]'>
                I couldn't be happier with the work done by
                 [Your Company Name]. They listened to my needs, 
                 provided exceptional design options, and executed everything flawlessly. My home now feels both beautiful and functional. I highly recommend 
                their services to anyone looking to elevate their living space.
                </small>
                <p>Femi 
                    <span><FaStar className='bg-[#EDAB42]'/></span>
                    <span><FaStar className='bg-[#EDAB42]'/></span>
                    <span><FaStar className='bg-[#EDAB42]'/></span>
                    <span><FaStar className='bg-[#EDAB42]'/></span>
                    <span><FaStar/></span>
                </p>
            </div>
            <div>
                <img src="./testimony.PNG" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Testimony