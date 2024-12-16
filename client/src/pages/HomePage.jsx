// import React from 'react'
import HeroSection from "../components/landing_page_components/HeroSection"
import AboutSection from "../components/landing_page_components/AboutSection"
import CollaborationSection from "../components/landing_page_components/CollaborationSection"
import CoursesSection from "../components/landing_page_components/CoursesSection"
import Plans from "../components/landing_page_components/Plans"
import Benefit from "../components/landing_page_components/Benefit"
import JoinUsSection from "../components/landing_page_components/JoinUsSection"
import Reasons from "../components/landing_page_components/Reasons"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CollaborationSection />
      <CoursesSection />
      <AboutSection />
      <Benefit />
      <Reasons />
      <Plans />
      <JoinUsSection />
    </div>
  )
}
