import React from 'react'

const Project = () => {
  return (
    <section id='project' className='bg-[#23262F] text-white'>
      <div>
        <h1 className='text-[24px] lg:text-[45px] text-center -mt-3'>Explore Some Of Our Projects</h1>
        <div className='lg:max-w-[900px] flex justify-end items-end flex-col ml-auto mr-auto mt-10 p-5'>
        <small className='text-[#EDAB42] text-sm underline mb-5'>See all</small>
        <div className='mr-auto ml-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
          <img src="./p10.jpg" alt="" width={250} height={250} className='w-[300px] h-[250px]'/>
          <img src="./p10.jpg" alt="" width={250} height={250} className='w-[300px] h-[250px]'/>
          <img src="./p10.jpg" alt="" width={250} height={250} className='w-[300px] h-[250px]'/>
          <img src="./p10.jpg" alt="" width={250} height={250} className='w-[300px] h-[250px]'/>
          <img src="./p10.jpg" alt="" width={250} height={250} className='w-[300px] h-[250px]'/>
          <img src="./p10.jpg" alt="" width={250} height={250} className='w-[300px] h-[250px]'/>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Project