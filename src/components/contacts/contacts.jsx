import React from 'react'

const Contacts = () => {
  return (
    <div name='contacts'className='h-screen w-full bg-gradient-to-tl from-[#16222A] via-[#3A6073] to bg-[#85D8CE] text-white p-4'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='font-bold text-4xl border-b-4 inline text-[#16222A] p-2'>Contacts</p>
                <p className='py-6'>Let's work together to bring your vision to life - contact me today to discuss how I can help elevate your brand and achieve your goals</p>

            </div>

            <div className='flex justify-center items-center'>
            <form action="" className='flex flex-col w-full md:w-1/2'>
                <input 
                type="text"
                name="name"
                placeholder='Enter your name' 
                className='bg-transparent rounded-md focus:outline-none text-white p-2 border-2'/>
                <input 
                type="text"
                name="email"
                placeholder='Enter your email' 
                className='my-4 bg-transparent rounded-md focus:outline-none text-white p-2 border-2'/>

                <textarea
                name=""
                id=""
                cols="30" 
                rows="10"
                placeholder='Enter your message'
                className='bg-transparent rounded-md focus:outline-none text-white p-2 border-2'
                >
                
                </textarea>
                <button className=' text-white w-fit px-4 py-4 my-8 flex items-center rounded-md bg-gradient-to-bl from-[#3A6073] to bg-[#16222A] hover:scale-110 duration-200 '>Let's Talk</button>
            </form>
            </div>
            
        </div>
    </div>
  )
}

export default Contacts;