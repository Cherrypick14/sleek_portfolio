import React from 'react'
import Portfolioarray,{portfolios} from './portfolioarray';


const Portfolio = () => {
  return (
    <div name='portfolio'className='h-screen w-full bg-gradient-to-tl from-[#16222A] via-[#3A6073] to bg-[#85D8CE] text-white'>
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen'>
          <div className='pb-8'>
            <p className='font-bold text-4xl border-b-4 inline text-[#16222A]'>Portfolio</p>
            <p className='py-6'>Check some of my passionate projects!!!...</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map((data)=>(
                <Portfolioarray data={data} key={data.key} />
            ))}
          </div>
       </div>

    </div>
  )
}

export default Portfolio;