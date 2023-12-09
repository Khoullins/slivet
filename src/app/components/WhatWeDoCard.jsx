import React from 'react';


const WhatWeDoCard = ({ imgUrl, title, year, location, client, description}) => {
  return (
    
      <div className='mx-auto w-fit'>
        <div 
          className="h-52 md:h-72 rounded-t-xl"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
         ></div>
         <div className='text-[#00AEEF] rounded-b-xl  py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            {/* <p className='text-[#AADB&BE]'>{year}</p>
            <p className='text-[#AADB&BE]'>{location}</p>
            <p className='text-[#AADB&BE]'>{client}</p> */}
            <p className='text-[#AADB&BE]'>{description}</p>
         </div>
    </div>
   
  )
}

export default WhatWeDoCard