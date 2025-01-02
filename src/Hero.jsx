import React from 'react'
import NavBar from './NavBar'
// import "./Hero.css"
const Hero = () => {
  return (
    <section className="text-white relative p-3 bg-bgImgHero w-full h-screen bg-cover bg-center bg-no-repeat">
      <NavBar />
      <div className='relative flex flex-col justify-center text-center top-[45px] w-full h-screen lg:h-fit'>
        <p className='text-[30px] lg:text-[60px] max-w-[871px] ml-auto mr-auto'>Personalized Interior Designs For Your Dream Home</p>
        <small className='text-[#d4d4d4] max-w-[730px] ml-auto mr-auto text-[14px] lg:text-[24px]'>
          From Concept to Completion,we bring your vision to life with customs solutions
        and expert craftsmanship.</small>
        <div className='flex justify-center items-center gap-[5px] lg:gap-[12px] mt-5'>
          <button className='text-[12px] lg:text-[16px] bg-transparent hover:backdrop-blur-md w-[250px] border-[1px] rounded-[7px] py-[12px] px-[10px] lg:px-[32px]'>Learn More</button>
          <button className='text-[12px] lg:text-[16px] text-[#23262F] w-[250px] bg-[#EDAB42] hover:bg-[#c58927] hover:border-[#c58927] border-[1px] border-[#EDAB42] rounded-[7px] py-[12px] px-[10px] lg:px-[32px]'>Schedule Consultation</button>
        </div>
      </div>
    </section>
  )
}

export default Hero

// w-[532px] h-[48px]  w-[176px] h-[19px]  h-[19px]