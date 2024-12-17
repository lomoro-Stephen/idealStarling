// import React from 'react'
import HeroSection from "../components/landing_page_components/HeroSection"
import AboutSection from "../components/landing_page_components/AboutSection"
import CollaborationSection from "../components/landing_page_components/CollaborationSection"
import CoursesSection from "../components/landing_page_components/CoursesSection"
import Plans from "../components/landing_page_components/Plans"
import Benefit from "../components/landing_page_components/Benefit"
import Reasons from "../components/landing_page_components/Reasons"
import Subscription from "../components/landing_page_components/Subscription"
import StatisticsSection from "../components/landing_page_components/StatisticsSection"
import CategorySection from "../components/landing_page_components/CategorySection"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CollaborationSection />
      <CoursesSection />
      <CategorySection />
      <AboutSection />
      <Benefit />
      <Reasons />
      <Plans />
      <StatisticsSection/>
      <Subscription />
    </div>
  )
}
