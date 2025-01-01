import React from 'react'

const MiddleContent = () => {
  return (
    <div className='bg-[#23262F] gap-4 relative flex justify-around items-center max-w-fit lg:max-w-[900px] ml-auto mr-auto z-50 -mt-10 lg:-mt-14 rounded-[10px] p-3'>
        <article className='text-center'>
            <h3 className='text-[#EDAB42] text-[20px] lg:text-[40px]'>500+</h3>
            <small className='text-[14px] lg:text-[24px] text-[#FBFCFF]'>Satisfied Clients</small>
        </article>
        <article className='text-center'>
            <h3 className='text-[#EDAB42] text-[20px] lg:text-[40px]'>250+</h3>
            <small className='text-[14px] lg:text-[24px] text-[#FBFCFF]'>Inferior Designs</small>
        </article>
        <article className='text-center'>
            <h3 className='text-[#EDAB42] text-[20px] lg:text-[40px]'>10yrs</h3>
            <small className='text-[14px] lg:text-[24px] text-[#FBFCFF]'>Industry Experience</small>
        </article>
  </div>
  )
}

export default MiddleContent