import React from 'react'
import ecom from '../../assets/portfolio/kiddostore_ecom.png'
import shopcart from '../../assets/portfolio/react shop cat.png'
import rad from '../../assets/portfolio/reactadmindashboard.png'
import landingpage from '../../assets/portfolio/starlight landing page.png'
import restcountriesapidata from '../../assets/portfolio/restcountries_data.png'
import yene from '../../assets/portfolio/yeneecommerce-store.png'

export const projects = [
    {
        id:1,
        src:ecom,
        demo:'https://kiddoshop-8c099.web.app/',
        code:'https://github.com/Cherrypick14/react_ecommerce_shop',
    },
    {
        id:2,
        src:shopcart,
        demo:'https://react-shopcarttt.vercel.app/',
        code:'https://github.com/Cherrypick14/react-shopcart',
    },
    {
        id:3,
        src:yene,
        demo:'https://tanz-tech.com/portfolio/Projects/YENA_USER/index.html',
    },
    {
        id:4,
        src:rad,
        demo:'https://rad-tailwind.vercel.app/',
        code:'https://github.com/Cherrypick14/rad-tailwind',
    },
    {
        id:5,
        src:landingpage,
        demo:'https://star-to-my-light.netlify.app/',
        code:'https://github.com/Cherrypick14/starlightconsult_firm',
    },
    {
        id:6,
        src:restcountriesapidata,
        demo:'https://rest-countries-data-theta.vercel.app/',
        code:'https://github.com/Cherrypick14/rest_countries_data',
    }
]

const Projectsarray = ({data}) => {
  
  return (
    <div className='shadow-md rounded-lg shadow-[#859398]'>
     <img src={data.src} alt="" className='rounded-md duration-200 ease-in-out hover:scale-105' />
        <div className='flex items-center justify-center'>
            <button 
            className='w-[1/2] px-6 py-3 m-4 duration-200 hover:scale-105'
            onClick={()=> window.location.href = data.demo}
            
            >Demo</button>
             <button className='w-[1/2] px-6 py-3 m-4 duration-200 hover:scale-105'
             onClick={()=> window.location.href = data.code}
             >Code</button>
                </div>
    </div>
  )
}

export default Projectsarray;