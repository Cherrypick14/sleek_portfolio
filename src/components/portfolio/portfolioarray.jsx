import React from 'react'
import ecom from '../../assets/portfolio/kiddostore_ecom.png'
import shopcart from '../../assets/portfolio/react shop cat.png'
import todo from '../../assets/portfolio/react todo list.png'
import rad from '../../assets/portfolio/reactadmindashboard.png'
import landingpage from '../../assets/portfolio/starlight landing page.png'

export const portfolios =[
    {
        id:1,
        src:ecom,
    },
    {
        id:2,
        src:shopcart,
    },
    {
        id:3,
        src:todo,
    },
    {
        id:4,
        src:rad,
    },
    {
        id:5,
        src:landingpage,
    }
]

const Portfolioarray = ({data}) => {
  return (
    <div className='shadow-md rounded-lg shadow-[#859398]'>
     <img src={data.src} alt="" className='rounded-md duration-200 ease-in-out hover:scale-105' />
        <div className='flex items-center justify-center'>
            <button className='w-[1/2] px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
             <button className='w-[1/2] px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
    </div>
  )
}

export default Portfolioarray;