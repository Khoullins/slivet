import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="grid text-black bg-slate-50" id="about">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-24'>
            <Image src="/images/slivetPrimLogoBgNon.png" width={500} height={500}/>
            <div>
                <h2 className='text-4xl font-bold text-[#004E60] mb-4'>About Us</h2>
                <p className='text-base lg:text-lg'>
                    Slivet Consulting is an Environmental, Health and Safety 
                    consulting firm incorporated in 2020. Our objective is to facilitate 
                    sustainable development and to help create a healthy and safe 
                    environment. We implement practical aspects in protecting the 
                    environment and maintaining health and safety at occupation. 
                    Though young, the firm has experts with great experience in the 
                    Environmental, Health and Safety field.
                </p>
            </div>            
        </div>
        <div className='text-4xl text-[#00AEEF] items-center justify-items-center text-center mx-auto w-1/2 mb-10'>
              <p>We have great Experience in <b>Environmental, Health and Safety field.</b></p>
              <button className='py-1 mb-6 mx-auto w-1/3  bg-gradient-to-r from-[#00AEEF] to-[#39B54A]'></button>
            </div>
            {/* <div>
                  <br />  
            </div> */}
    </section>
  )
}

export default AboutSection