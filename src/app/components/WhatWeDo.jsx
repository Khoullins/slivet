import React from 'react';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section className="grid text-black bg-slate-200" id="whatwedo">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-24'>            
            <div>
                <h2 className='text-center text-4xl font-bold text-[#004E60] mb-4'>What We Do</h2>
                <p className='text-base lg:text-lg text-center'>
                We implement the practical aspects of <b>protecting <br></br>the environment and maintaining health and safety at occupation.    </b>
                </p>
            </div>
            <Image src="/images/whatwedo/it-s-a-blank-te_62835505 (1)-PhotoRoom.png" width={500} height={500}/>            
        </div>
        {/* <div className='text-4xl text-[#00AEEF] items-center justify-items-center text-center mx-auto w-1/2 mb-10'>
              <p>We have great Experience in <b>Environmental, Health and Safety field.</b></p>
              <button className='py-1 mb-6 mx-auto w-1/3  bg-gradient-to-r from-[#00AEEF] to-[#39B54A]'></button>
            </div> */}
            {/* <div>
                  <br />  
            </div> */}
    </section>
  )
}

export default WhatWeDo