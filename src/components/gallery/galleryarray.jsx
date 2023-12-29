import React from 'react'
import endpiscine from '../../assets/zone01xlakehub/endpiscine1.png'
import kiddo from '../../assets/zone01xlakehub/Kiddo.jpg'
import lakehub2 from '../../assets/zone01xlakehub/Lakehub2photos.jpg'
import lakehub3 from '../../assets/zone01xlakehub/lakehub3.jpg'
import success from  '../../assets/zone01xlakehub/SUCCESS-PISCINE.jpg'
import py from '../../assets/zone01xlakehub/PY.png'
import zone01 from '../../assets/zone01xlakehub/zone01_candidates.png'

export const gallerystack = [
  {
    id:1,
    src:endpiscine,
  },
  {
    id:2,
    src:kiddo,
  },
  {
    id:3,
    src:lakehub2,
  },
  {
    id:4,
    src:lakehub3,
  },
  {
    id:5,
    src:success,
  },
  {
    id:6,
    src:py,
  },
  {
    id:7,
    src:zone01,
  },
]

const Galleryarray = ({data}) => {
  return (
    <div className= 'max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
        <img src={data.src} alt="" className='h-48 w-full object-cover md:w-48'/>
        </div>
      </div>
  </div>
  )
}
export default Galleryarray;