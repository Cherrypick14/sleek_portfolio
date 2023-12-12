import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const links = [
    {
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin size={30} />  
            </>
        ),
        href:"https://www.linkedin.com/in/cheryl-owala-423731191/",
        style:'rounded-tr-md',
    },
    {
        id:2,
        child:(
            <>
           X <FontAwesomeIcon icon="fa-brands fa-x-twitter" size='30' />
          {/* Twitter  <FaTwitter size={30} />    */}
            </>
        ),
        href:"https://twitter.com/owalacheryl/status/1343881468154671104?lang=en",
    
    },
    {
        id:3,
        child:(
            <>
           Github <FaGithub size={30} />  
            </>
        ),
        href:"https://github.com/Cherrypick14",
    
    },
    {
        id:4,
        child:(
            <>
           Mail  <HiOutlineMail size={30} /> 
            </>
        ),
        href:"mailto:owalacheryl@gmail.com",
    },
    {
        id:5,
        child:(
            <>
             Resume <BsFillPersonLinesFill size={30} /> 
            </>
        ),
        href:"https://drive.google.com/file/d/1ZSOR1mdfC9bkCkuPicmhNZ4GwNd4VrWQ/view?usp=share_link",
        style:'rounded-br-md',
        download:true,
    },
]

const Sociallinksdata = ({data}) => {
  return (
    
      <li className=
      {`flex items-center justify-between w-40 h-14 px-4 bg-[#16222A] hover:rounded-md duration-300 ml-[-100px] hover:ml-[-10px] ${data.style}`}>
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

export default Sociallinksdata;