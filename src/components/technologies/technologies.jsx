import React from 'react'
import Technologiesarray,{techstacks} from './technologiesarray';

const Technologies = () => {
  return (
    <div name='technologies'className='md:h-screen w-full bg-gradient-to-tl from-[#16222A] via-[#3A6073] to bg-[#85D8CE] text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='font-bold text-4xl border-b-4 inline text-[#16222A] p-2'>Technologies</p>
                <p className='py-6'>These are the Tech stacks I've worked with</p>
            </div>
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8 sm:px-0 text-center'>
               {techstacks.map((data)=>(
                  <Technologiesarray data={data} key={data.key}/>
               ))}
            </div>
        </div>
    </div>
  )
}

export default Technologies;