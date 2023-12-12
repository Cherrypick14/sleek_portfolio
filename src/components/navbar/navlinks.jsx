import React from 'react'

export const links = [
    {
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'piscine'
    },
    {
        id:3,
        link:'gallery'
    },
    {
        id:4,
        link:'projects'
    },
    {
        id:5,
        link:'techstacks'
    },
    {
        id:6,
        link:'contacts'
    },
]
const Navlinks = ({data}) => {
   
  return (
    <>
      <li className='px-4 capitalize text-[#85D8CE] hover:scale-105 font-medium cursor-pointer duration-200 hover:text-[#3A6073]'>
          {data.link}
        </li>
    </>
      
    
  )

}

export default Navlinks;