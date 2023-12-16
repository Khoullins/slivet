import React from 'react';
import Image from 'next/image'; 


const HeroSection = () => {
  return (
    <section className='bg-[#004E60]  mx-auto p-y4 xl:h-screen lg:h-screen md:h-screen sm:h-screen  ' id='/'>
        <div className='flex flex-row  items-center justify-center'>
         <div className="flex flex-col ml-2 mr-2 auto-cols-max">
                <div className="sm:text-left mx-auto w-1/2 mt-24 xl:text-center sm:w-fit">
                    <h1 className='text-center mb-4 text-white sm:text-2xl lg:text-4xl'>Your sustainable <b>development partner</b></h1>                    
                </div>
                <div className='flex flex-row mx-auto w-1/2'>
                    <button className='basis-1/2 py-1  bg-gradient-to-r from-[#00AEEF] to-[#39B54A]  mb-4'></button>
                </div>
                <div className='grid grid-cols-3 gap-8 auto-rows-max h-full w-full'>
                    <div className=''>
                        <Image 
                            src='/images/slivet_drain.jpg'
                            alt='drain'                             
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className=''>
                        <Image
                            src='/images/slivet_construction_1.jpg'
                            alt='construction'                            
                            width={400}
                            height={400}
                        />
                    </div>
                    <div>
                        <Image
                            src='/images/clean_energy.jpg'
                            alt='construction'                            
                            width={400}
                            height={400}
                        />
                    </div>                    
                </div>
            </div>              
       </div>
       <div className="mx-auto w-1/2 items-center justify-center  xl:w-fit lg:w-fit md:w-fit sm:w-fit xl:h-fit lg:h-fit md:h-fit sm:h-fit ">
                    {/* <h1 className='text-center mb-4 text-white sm:text-2xl lg:text-4xl'>Your sustainable <b>development partner</b></h1>                                         */}
                    <Image 
                            src='/images/slivetSecLogoBgNonHD.png'
                            alt='Logo'                             
                            width={600}
                            height={600}
                        />
        </div> 
        {/* <div className='grid grid-cols-1 sm:grid-cols-12 h-screen'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>Slivet</h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Slivet Consulting is an Environmental, Health and Safety 
                    consulting firm incorporated in 2020. Our objective is to facilitate 
                    sustainable development and to help create a healthy and safe 
                    environment. We implement practical aspects in protecting the 
                    environment and maintaining health and safety at occupation. 
                    Though young, the firm has experts with great experience in the 
                    Environmental, Health and Safety field.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Hire Me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src='/images/slivet_bg.png'
                        alt='slivet_bg'
                        className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={300}
                        height={300}
                    />
                </div>
            </div>            
        </div> */}
        
    </section>
  )
}

export default HeroSection