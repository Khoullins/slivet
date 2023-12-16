import React from 'react';
import WhatWeDoCard from './WhatWeDoCard';


const doData = [
    {
        id: 1,
        title: "Environmental and Social Impact Assessment",
        description: "Slivet strives for sustainable development by assessing the environmental risks a proposed project has and provides appropriate mitigation measures or alternatives for them. This includes, roads, water structures and pipelines, buildings, hydropower, solar etc.",
        image: "/images/whatwedo/EA.jpg",
        tag:["All", "Web"],
    },
    {
        id: 2,
        title: "Health and Safety Audits",
        description: "Safety at work is a core value for us at Slivet and we ensure that your premise is safer for employees after our audit. We also ensure compliance to the relevant laws and regulation.",        
        image: "/images/whatwedo/HA.png",
        tag:["All", "Web"],
    },
    {
        id: 3,
        title: "Environmental Audit",
        description: "In our audit process our main aim is to give value to the client by enhancing areas that are being well done and giving suggestions to areas that can be improved so as to ensure environmental sustainability. We also ensure compliance to the relevant laws and regulation.",        
        image: "/images/whatwedo/EnvironmentalAudit.jpg",
        tag:["All", "Web"],
    },
    {
        id: 4,
        title: "EHS Supervision of construction works",
        description: "Slivet provides an EHS officer at your site so as to ensure the health and safety of your employees and also ensure compliance with the relevant laws and regulation during the construction phase.",        
        image: "/images/whatwedo/slivet_construction.jpg",
        tag:["All", "Web"],
    },
    {
        id: 5,
        title: "Preparation and implementation of Environmental and Social Management Systems",
        description: "Occupational Health and Safety Management Plan, Waste Management Plan, Stakeholder Engagement Grievance Redress Mechanism, Gender Action Plan",        
        image: "/images/whatwedo/Prep.png",
        tag:["All", "Web"],
    },
]
   

const WhatWeDoSection = () => {
  return (
    <section id='whatwedo' className='bg-slate-200'>
        <div>
            <h2 className='text-center text-4xl font-bold text-[#004E60] mt-24 mb-8 md:mb-12'>
                WHAT WE DO
                <p className='text-xl text-center text-[#00AEEF]'>
                We implement the practical aspects of <b>protecting <br></br>the environment and maintaining health and safety at occupation.    </b>
                </p>
            </h2>
        <div className='grid md:grid-cols-3 xl:ml-8 gap-8 md:gap-12'>
            {doData.map((whatwedo => 
                <WhatWeDoCard 
                    key={whatwedo.id} 
                    title={whatwedo.title}
                    // year={project.year}
                    // location={project.location}
                    // client={project.client} 
                    description={whatwedo.description} 
                    imgUrl={whatwedo.image}
                    tags={whatwedo} 
                />
            ))}
        </div>
        </div>
    </section>
  )
}

export default WhatWeDoSection