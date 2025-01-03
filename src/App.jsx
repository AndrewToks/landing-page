import React from 'react'
import Hero from './Hero'
import ShowCase from './ShowCase'
import MiddleContent from './MiddleContent'
import Service from './Service'
import MiddleImage from './MiddleImage'
import Project from './Project'
import Testimony from './Testimony'
import Footer from './Footer'


const App = () => {
  return (
    <div className='w-full'>
      <Hero />
      <MiddleContent />
      <ShowCase />
      <MiddleImage />
      <section className='bg-[#23262F] text-white'>
      <Service />
      <Project />
      </section>
      <Testimony />
      <Footer />
    </div>
  )
}

export default App
