// import React from 'react'
import HeroSection from "../components/landing_page_components/HeroSection"
import AboutSection from "../components/landing_page_components/AboutSection"
import CollaborationSection from "../components/landing_page_components/CollaborationSection"
import CoursesSection from "../components/landing_page_components/CoursesSection"
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CollaborationSection />
      <CoursesSection />
      <AboutSection />
    </div>
  )
}
