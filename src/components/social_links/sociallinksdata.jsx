import React from 'react'
import {FaGithub,FaLinkedin, FaTwitter} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export const links = [
    {
        id:1,
        child:(
            <>
             <FaLinkedin size={30} /> LinkedIn
            </>
        ),
        href:"https://www.linkedin.com/in/cheryl-owala-423731191/",
        style:'rounded-tl-md'
    },
    {
        id:2,
        child:(
            <>
             <FaTwitter size={30} /> Twitter
            </>
        ),
        href:"https://twitter.com/owalacheryl/status/1343881468154671104?lang=en",
    
    },
    {
        id:3,
        child:(
            <>
             <FaGithub size={30} /> Github
            </>
        ),
        href:"https://github.com/Cherrypick14",
    
    },
    {
        id:4,
        child:(
            <>
             <HiOutlineMail size={30} /> Mail
            </>
        ),
        href:"mailto:owalacheryl@gmail.com",
    },
    {
        id:5,
        child:(
            <>
             <BsFillPersonLinesFill size={30} /> Resume
            </>
        ),
        href:"https://drive.google.com/file/d/1kwHFGwLg-zU606cprxDCAmpJ5V-HOYKr/view?usp=share_link",
        style:'rounded-bl-md',
        download:true
    },
]

const Sociallinksdata = ({data}) => {
  return (
    
      <li className=
      {'flex items-center justify-between w-40 h-14 px-4 bg-[#16222A] hover:rounded-md duration-300 mr-[-100px] hover:mr-[-10px]'}>
                <a href={data.href}
                className='w-full flex justify-between items-center text-[#85D8CE]'
                download={data.download}
                target='_blank'
                rel="noreferrer"
                > 
            
                {data.child}
                
                </a>
               
                
                </li>
    
  )
}

export default Sociallinksdata