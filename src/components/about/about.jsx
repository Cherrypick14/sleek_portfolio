import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-tl from-[#16222A] via-[#3A6073] to bg-[#85D8CE]'>
        <div className='max-w-screen-lg h-screen w-full justify-center flex flex-col p-4 mx-auto'>
            <div className='pb-4'>
                <h2 className='font-bold text-4xl border-b-4 inline text-[#16222A] '>About</h2>
            </div>
            <p className=' md:text-xl  md:mt-20 text-white'>
            Well,as an avid hiker,I have developed skills in planning, preparation and navigation. This activity has taught me how to build resilience,perseverance and problem-solving, which can be applicable in a professional setting.
            </p>
            <br/>
            <p className='md:text-xl text-white '>
            Participating in hackathons can be a great way to gain experience working collaboratively on real-world projects. In the Value Chain Factory Hackathon, I had the opportunity to contribute as a front-end engineer to a team developing solutions for various sectors. Specifically, I worked on a project aimed at addressing emergency needs in the health care sector. Through the use of the React-Django-Postgres tech stack, I developed a website that helped improve emergency response in the health care sector. This experience allowed me to further develop my front-end engineering skills while also making a tangible impact in the community.
            </p>
        </div>
    </div>
  )
}

export default About;