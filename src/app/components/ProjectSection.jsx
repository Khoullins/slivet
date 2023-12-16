import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        id: 1,
        title: "Renewable Energy Performance Platform Academy 2020",
        year: "Year: 2020",
        location: "Location: Kenya",
        client: "Client: Camco Management Ltd",
        description: "Facilitating/speaking on the implementation of Environmental and Social Management Systems",
        image:"/images/projects/public_speaking.jpg",
        tag:["All", "Web"],
    },
    {
        id: 2,
        title: "Environmental and Social Management System For The Retrofit And Installation of Energy Efficiency Equipment And A Captive Solar Pv Plant At Brookhouse School",
        year: "Year: 2020",
        location: "Location: Kenya",
        client: "Client: Camco Clean Energy",
        description: "1.High level assessment of projects impacts and risk 2. Establishment of: a. Occupational Health and Safety Policy and Plan b. Waste Management Plan c. Grievance Redress Mechanism d. Emergency Response Plan 3. Establish a monitoring and reporting plan including: a. OHS incidents, b. Grievances, c. Waste stored, recycled and disposed, d. Training 4. Scope and vet a waste management company",
        image:"/images/projects/CleanEnergy.jpg",
        tag:["All", "Web"],
    },
    {
        id: 3,
        title: "Ultra-Modern Library Rongo University",
        year: "Year: 2020",
        location: "Location: Kenya",
        client: "Client: Rongo University",
        description: "Conducting Environmental and Social Impact Assessment (ESIA) of the proposed project and follow up on NEMA license. ",
        image:"/images/projects/RongoUniversityModernLibrary.png",
        tag:["All", "Web"],
    },
    {
        id: 4,
        title: "Runda Guest House Environmental and Social Impact Assessment (ESIA)",
        year: "Year: 2020",
        location: "Location: Kenya",
        client: "Client: Ambatana Manor",
        description: "Conducting Environmental and Social Impact Assessment (ESIA) of the proposed project and follow up on NEMA license",
        image:"/images/projects/RundaGuestHouse.png",
        tag:["All", "Web"],
    },
    {
        id: 5,
        title: "Kafadune Quarry D19 Environmental and Social Impact Assessment (ESIA)",
        year: "Year: 2022-2023",
        location: "Location: Kenya",
        client: "Client: Eco-Brains Contractors ltd",
        description: "Conducting Environmental and Social Impact Assessment (ESIA) of the proposed project and follow up on NEMA license. Preparing a quarry Rehabilitation Plan.",
        image:"/images/projects/KafaduneQuarry.jpg",
        tag:["All", "Web"],
    },
    {
        id: 6,
        title: "Malaba Container Yard Environmental and Social Impact Assessment (ESIA)",
        year: "Year: 2022",
        location: "Location: Kenya",
        client: "Client: Kenya Railways",
        description: "Conducting Environmental and Social Impact Assessment (ESIA) of the proposed project and follow up on NEMA license.",
        image:"/images/projects/MalabaContainerYard.jpg",
        tag:["All", "Web"],
    },
    {
        id: 7,
        title: "Mombasa Metre Gauge Railway and Makupa Bridge",
        year: "Year: 2022",
        location: "Location: Kenya",
        client: "Client: Kenya Railways",
        description: "Conducting Environmental and Social Impact Assessment (ESIA) of the proposed project. Preparing Fisheries Management Plan, Mangrove Management Plan and a Water Pollution Contingency Plan",
        image:"/images/projects/MombasaMetreGaugeRailwayAndMakupaBridge.png",
        tag:["All", "Web"],
    },
    {
        id: 8,
        title: "Earth Spoil and Stone dumpsite, Mombasa",
        year: "",
        location: "",
        client: "",
        description: "",
        image:"/images/projects/dumpsite.jpeg",
        tag:["All", "Web"],
    },
]

const ProjectSection = () => {
  return (
    <section className='bg-slate-100 py-8 px-4' id='projects'>
        
        <h2 className='text-center text-4xl font-bold text-[#004E60] mt-24 mb-8 md:mb-12'>
            Experience
            <p className='text-xl text-[#00AEEF]'>We implement the practical aspects of protecting the environment and maintaining health and safety at occupation.</p>
        </h2>
        <div className='grid md:grid-cols-3 xl:ml-8 gap-8 md:gap-12'>
            {projectData.map((project => 
                <ProjectCard 
                    key={project.id} 
                    title={project.title}
                    // year={project.year}
                    // location={project.location}
                    // client={project.client} 
                    // description={project.description} 
                    imgUrl={project.image}
                    tags={project} 
                />
            ))}
        </div>
    </section>
  )
}

export default ProjectSection