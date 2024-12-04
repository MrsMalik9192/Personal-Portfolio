import React from 'react'
import { HiMenu } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-serif '>Kanwal Umair</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menuLink'><a href='#hero'>Home</a></li>
            <li className='menuLink'><a href='#about'>About</a></li>
         <li className='menuLink'><a href='#contact'>Contact</a></li>
         <li className='menuLink'><a href='#projects'>Projects</a></li>
         <button className=' bg-gray-100 text-black py-2 px-2 rounded-lg font-bold'>Downlod CV</button>
        </ul>
        <HiMenu className='md:hidden cursor-pointer' size={30}/>
      </div>
    </div>
  )
}

export default Navbar
