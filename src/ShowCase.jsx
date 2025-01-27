import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
const ShowCase = () => {
  return (
    <section className='container flex flex-col gap-16 p-5 mt-24'>
        <article className='max-w-[900px] flex-col flex lg:flex-row justify-center items-center ml-auto mr-auto gap-2 lg:gap-[72px]'>
            <img src="./image1.png" alt="" width={500} height={500} className='w-[511px] h-[400px]' />
            <div className='flex flex-col gap-5'>
                <h2 className='text-[24px] font-bold text-[#23262F]'>Interior design solutions that 
                reflect your unique style
                </h2>
                <small className='text-[17px]'>Customized spaces that capture your personality,lifestyle and aesthetic
                designed to inspire and enhance your daily life. </small>
                <div className='bg-[#EDAB42] w-[250px] h-[35px] rounded-[7px] flex justify-center items-center gap-10'>
                <button>Learn More</button>
                <IoIosArrowRoundForward size={20} />
            </div>
            </div>
        </article>
        <article className='max-w-[900px] flex-col flex lg:flex-row justify-center items-center ml-auto mr-auto gap-2 lg:gap-[72px]'>
            <div className='flex flex-col gap-5'>
                <h2 className='text-[24px] font-bold text-[#23262F]'>
                    Unlocking the art of living one space at a time
                </h2>
                <small className='text-[17px]'>
                    Crafting holistic environments that harmonize function,
                    beauty and wellness,empowering individuals to thrive in body, mind
                    and spirit
                </small>
                <div className='bg-[#EDAB42] w-[250px] h-[35px] rounded-[7px] flex justify-center items-center gap-10'>
                <button>Learn More</button>
                <IoIosArrowRoundForward size={20} />
            </div>
            </div>
            <img src="./image1.png" alt="" className='w-[511px] h-[400px]' width={500} height={500}/>
        </article>
    </section>
  )
}

export default ShowCase