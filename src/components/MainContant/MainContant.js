"use client"
import AboutSection from '@/SectionComponets/AboutSection'
import ContactSection from '@/SectionComponets/ContactSection'
import HomeSection from '@/SectionComponets/HomeSection'
import PortfolioSection from '@/SectionComponets/PortfolioSection'
import SkillsSection from '@/SectionComponets/SkillsSection'
import React from 'react'

const MainContent = () => {
    return (
        <main className="main-content">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <PortfolioSection />
            <ContactSection />
        </main>
    )
}

export default MainContent