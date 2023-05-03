import React from 'react'
import css3 from '../../assets/techstacks/icons8-css3-144.png'
import git from '../../assets/techstacks/icons8-git-144.png'
import github from '../../assets/techstacks/icons8-github-192.png'
import html from '../../assets/techstacks/icons8-html-5--96.png'
import javascript from '../../assets/techstacks/icons8-javascript-144.png'
import node from '../../assets/techstacks/icons8-nodejs-144.png'
import python from '../../assets/techstacks/icons8-python-144.png'
import reactimage from '../../assets/techstacks/icons8-react-native-144.png'
import tailwind from '../../assets/techstacks/icons8-tailwindcss-144.png'

export const techstacks = [
    {
      id:1,
      src:css3,
      title:'CSS3',
      style:'shadow-blue-300',
    },
    {
        id:2,
        src:git,
        title:'GIT',
        style:'shadow-orange-300',
      },
      {
        id:3,
        src:github,
        title:'GITHUB',
        style:'shadow-gray-300',
      },
      {
        id:4,
        src:html,
        title:'HTML5',
        style:'shadow-orange-500',
      },
      {
        id:5,
        src:javascript,
        title:'JAVASCRIPT',
        style:'shadow-yellow-500',
      },
      {
        id:6,
        src:node,
        title:'NODE',
        style:'shadow-green-500',
      },
      {
        id:7,
        src:python,
        title:'PYTHON',
        style:'shadow-yellow-500',
      },
      {
        id:8,
        src:reactimage,
        title:'REACT',
        style:'shadow-blue-600',
      },
      {
        id:9,
        src:tailwind,
        title:'TAILWIND',
        style:'shadow-sky-400',
      },
    
]

const Technologiesarray = ({data}) => {
  return (
    <div className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${data.style}`}>
      <img src={data.src} alt="" className='w-20 mx-auto' />
       <p><span className='mt-4'>{data.title}</span></p>
         
    </div>
  )
}

export default Technologiesarray;