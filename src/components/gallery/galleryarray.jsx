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
    title:'ENDPISCINE',
    style:'shadow-blue-950',
  },
  {
    id:2,
    src:kiddo,
    title:'KIDDO',
    style:'shadow-orange-300',
  },
  {
    id:3,
    src:lakehub2,
    title:'LAKEHUB2',
    style:'shadow-gray-300',
  },
  {
    id:4,
    src:lakehub3,
    title:'LAKEHUB3',
    style:'shadow-orange-500',
  },
  {
    id:5,
    src:success,
    title:'SUCCESS',
    style:'shadow-yellow-300',
  },
  {
    id:6,
    src:py,
    title:'PY',
    style:'shadow-green-500',
  },
  {
    id:7,
    src:zone01,
    title:'ZONE01',
    style:'shadow-yellow-500',
  },
]

const Galleryarray = ({data}) => {
  return (
    <div className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${data.style}`}>
    <img src={data.src} alt="" className='w-20 mx-auto' />
     <p><span className='mt-4'>{data.title}</span></p>
       
  </div>
  )
}
export default Galleryarray;