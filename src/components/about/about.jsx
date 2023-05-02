import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-tl from-[#16222A] via-[#3A6073] to bg-[#85D8CE]'>
        <div className='max-w-screen-lg h-screen w-full justify-center flex flex-col p-4 mx-auto'>
            <div className='pb-4'>
                <h2 className='font-bold text-4xl border-b-4 inline text-[#16222A] '>About</h2>
            </div>
            <p className=' md:text-xl  md:mt-20 text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione facilis magni harum ex expedita natus, obcaecati maiores numquam eius est rem iusto debitis. Fugit, quia! Voluptatibus, doloribus. In, autem cupiditate!
            </p>
            <br/>
            <p className='md:text-xl text-white '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quis cupiditate iusto unde itaque debitis culpa quod quos ratione animi beatae aliquid eius fugit obcaecati, sunt, aspernatur voluptatibus quisquam nobis?
            </p>
        </div>
    </div>
  )
}

export default About;