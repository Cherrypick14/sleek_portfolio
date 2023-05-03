import React,{useState} from 'react'
import{FaBars, FaTimesCircle} from 'react-icons/fa'
import { Link } from "react-scroll";

import Navlinks, {links} from '../navbar/navlinks'

const Navbar = () => {
    const [nav, setNav]= useState(false);

  return (
    <div className='fixed h-20 w-full flex justify-between items-center text-[#85D8CE] bg-[#16222A] px-4'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Cheryl_dev</h1>
      </div>
      
      <ul className='hidden md:flex'>
      {links.map((data)=>(
        
        <Link to={data.link} smooth={true} spy={true} duration={500}offset={-80}>
         <Navlinks data={data} key={data.id}/>
        </Link>
        
       ))}
      </ul>  

      <div onClick={()=> setNav(!nav)} className='cursor-pointer z-20 pr-4 text-[#3A6073] md:hidden'>
      
        {nav ? <FaTimesCircle size={20}/> : <FaBars size={20}/>}
      </div>
      
      {nav &&(
        <div className='absolute h-screen top-0 left-0 w-full bg-[#16222A]'>
            ( <ul className='flex flex-col space-y-6 items-center justify-center mt-12 sm:text-2xl text-[#85D8CE]'>
        {links.map((data)=>(

          <Link to={data.link} smooth={true} spy={true} duration={500} onClick={()=>setNav(!nav)} >
              <Navlinks data={data} key={data.id}/>
          </Link>
     
       ))}
        </ul>)
        </div>

      ) }  
    </div>
  )
}

export default Navbar;