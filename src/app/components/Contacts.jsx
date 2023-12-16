import React from 'react';
import Image from 'next/image';

const Contacts = () => {
  return (
    <section className='xl:h-screen lg:h-screen md:h-screen sm:h-screen w-auto bg-[#004E60] ' id='contact'>
        <div className="mx-auto w-1/2 items-center justify-center xl:w-fit lg:w-fit md:w-fit sm:w-fit">
                    {/* <h1 className='text-center mb-4 text-white sm:text-2xl lg:text-4xl'>Your sustainable <b>development partner</b></h1>                                         */}
                    <Image 
                            src='/images/slivetSecLogoBgNonHD.png'
                            alt='Logo'                             
                            width={600}
                            height={600}
                        />
            </div>
        <div className='flex flex-row items-center justify-center'>
            
            <div className="flex flex-col ml-2 mr-2 auto-cols-max">
                {/* <div className='h-52 md:h-72 rounded-t-xl xl:ml-56 sm:ml-32 xl:mr-56 sm:mr-32 w-fit sm:w-fit'>
                        
                </div> */}
               
                <div className='flex flex-row xl:ml-56 sm:ml-32 xl:mr-56 sm:mr-32'>
                    {/* <button className='basis-1/4 xl:basis-1/3 px-18 py-1 w-full bg-gradient-to-r from-[#00AEEF] to-[#39B54A] col-span-2 mb-4'></button> */}
                </div>
                <div className='grid grid-cols-3 xl:gap-8 lg:gap-8 md:gap-4 sm:gap-4  auto-rows-max h-full w-full'>
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
        <div className='mx-auto w-1/2 items-center justify-items-center text-white text-center md:mt-8'>
                    <h3 ><b>SLIVET CONSULTING LIMITED</b></h3>
                    <p >P.O Box 24754-00100, Nairobi</p>
                    <p >T:+254 728 095 767 | +254 732 073 753</p>
                    <p >E:slivetconsultingltd@gmail.com</p>
                    <button className=' py-1 mb-6 mx-auto w-1/3  bg-gradient-to-r from-[#00AEEF] to-[#39B54A]'></button>
        </div>
        <div className='items-center justify-center '>
            
        </div> 
    </section>
  )
}

export default Contacts