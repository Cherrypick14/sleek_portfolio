import React from 'react'
import gprofile from '../../assets/gProfile.jpg'
import{MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";

const Home = () => {
    
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-tl from-[#16222A] via-[#3A6073] to bg-[#85D8CE] '>
       <div className='max-w-screen-lg mx-auto items-center justify-center flex flex-col h-full md:flex-row'>
        <div className='flex flex-col justify-center h-full ml-5'>
            <h2 className='text-3xl sm:text-5xl font-bold text-[#16222A]'>I'm a Full Stack Developer</h2>
             <p className='py-4 max-w-md text-white'>
             As a full-stack developer, my forte lies in the artistry of front-end development. I specialize in crafting immersive and emotionally resonant user interfaces that transcend the ordinary. 
             </p>

             <div>
                <Link to='project' smooth duration={500} offset={-80} className='group text-white w-fit px-4 py-4 flex items-center rounded-md bg-gradient-to-bl from-[#3A6073] to bg-[#16222A] cursor-pointer'>
                    Projects<span className='group-hover:rotate-90'> <MdKeyboardArrowRight size={25} className='ml-1
                    '/></span>
                </Link>
             </div>

        </div>

        <div>
            <img src={gprofile} alt="my profile" className='rounded-e-2xl w-2/3 mx-auto ' />
        </div>

       </div>

    </div>
  )
}

export default Home;