import Image from 'next/image'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import Contacts from './components/Contacts';
import WhatWeDoSection from './components/WhatWeDoSection';
 
export default function Home() {
  return (
    <main>
      <Navbar />
        <div>        
          <HeroSection />
          <AboutSection />
          <WhatWeDoSection />
          <ProjectSection />
          <Contacts />
        
        </div>
    </main>
  )
}
