import React from 'react'
import css3 from '../../assets/techstacks/icons8-css3-144.png'
import git from '../../assets/techstacks/icons8-git-144.png'
import github from '../../assets/techstacks/icons8-github-192.png'
import html from '../../assets/techstacks/icons8-html-5--96.png'
import javascript from '../../assets/techstacks/icons8-javascript-144.png'
import node from '../../assets/techstacks/icons8-nodejs-144.png'
import python from '../../assets/techstacks/icons8-python-144.png'
import react from '../../assets/techstacks/icons8-react-native-144.png'
import tailwind from '../../assets/techstacks/icons8-tailwindcss-144.png'

export const techstacks = [
    {
      id:1,
      src:css3,
      title:'CSS3',
    },
    {
        id:2,
        src:git,
        title:'GIT',
      },
      {
        id:3,
        src:github,
        title:'GITHUB',
      },
      {
        id:4,
        src:html,
        title:'HTML5'
      },
      {
        id:5,
        src:javascript,
        title:'JAVASCRIPT',
      },
      {
        id:6,
        src:node,
        title:'NODE',
      },
      {
        id:7,
        src:python,
        title:'PYTHON',
      },
      {
        id:8,
        src:react,
        title:'REACT',
      },
      {
        id:9,
        src:tailwind,
        title:'TAILWIND',
      },
    
]

const Technologiesarray = ({data}) => {
  return (
    <div className='shadow-md rounded-lg shadow-[#859398]'>
      <img src={data.src} alt="" />
         <span>{data.title}</span>
    </div>
  )
}

export default Technologiesarray;