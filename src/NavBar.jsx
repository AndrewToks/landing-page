import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6"
// import "./NavBar.css"
const NavBar = () => {
  const [showMenu,setShowMenu] = useState(false)

  return (
    <nav className='container relative ml-auto mr-auto flex items-center justify-between py-3 px-5'>
        <h1 className='text-[20px]'><span className='text-[#EDAB42]'>Serene</span><span>haven</span></h1>
          <ul className='hidden lg:flex justify-center items-center gap-5 text-[17px]'>
              <li>Home</li>
              <li>About</li>
              <a href="#project"><li>Projects</li></a>
              <li>FAQ</li>
              <li>Contact</li>
          </ul>
          <button className='hidden lg:block bg-[#EDAB42] hover:bg-[#c58927] font-medium text-[#23262F] text-[16px] h-[48px] w-[146px] rounded-[7px]'>Get Started</button>
        
        <div className='flex flex-col lg:hidden justify-between items-center gap-10'>
          <h1 onClick={()=>{
            setShowMenu(true)
          }}><FaBarsStaggered size={30}/></h1>
        {showMenu && 
          <ul className='bg-[#23262F] rounded-[7px] absolute z-[999] p-5 right-0 top-0  w-full flex flex-col min-h-screen justify-center items-center gap-10 text-[17px]'>
              <h1 className="cursor-pointer bg-[#EDAB42] hover:bg-[#c58927] rounded-[100%] px-[15px] py-[8px] font-bold text-[16px]" onClick={()=>{
            setShowMenu(false)
          }}>X</h1>
            <li onClick={()=>{
              setShowMenu(false)
            }}>Home</li>
            <li
            onClick={()=>{
              setShowMenu(false)
            }}>About</li>
            <a href="#project"
            onClick={()=>{
              setShowMenu(false)
            }}><li>Projects</li></a>
            <li
            onClick={()=>{
              setShowMenu(false)
            }}>FAQ</li>
            <li
            onClick={()=>{
              setShowMenu(false)
            }} className='cursor-pointer'>Contact</li>
        <button className='bg-[#EDAB42] hover:bg-[#c58927] font-medium text-[#23262F] text-[16px] h-[48px] w-[146px] rounded-[7px]'>Get Started</button>
        </ul>
        }
        </div>
    </nav>
  )
}

export default NavBar

