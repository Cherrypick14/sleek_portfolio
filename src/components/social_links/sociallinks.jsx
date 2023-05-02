import React from 'react'
import Sociallinksdata,{links} from './sociallinksdata';


const Sociallinks = () => {

  return (
    <div className='hidden lg:flex flex-col left-0 top-[35%] fixed'>
        <ul> 
          {links.map((data)=>(
             <Sociallinksdata data={data} key={data.id} />
          ))}
      
        </ul>
    </div>
  )
}

export default Sociallinks;