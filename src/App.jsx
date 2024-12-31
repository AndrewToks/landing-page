import React from 'react'
import Hero from './Hero'
import ShowCase from './ShowCase'
import MiddleContent from './MiddleContent'
import Service from './Service'
import MiddleImage from './MiddleImage'
import Project from './Project'


const App = () => {
  return (
    <div className='w-full'>
      <Hero />
      <MiddleContent />
      <ShowCase />
      <MiddleImage />
      <Service />
      {/* <Project /> */}
    </div>
  )
}

export default App
