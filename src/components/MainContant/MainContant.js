"use client"
import AboutSection from '@/SectionComponets/AboutSection'
import ContactSection from '@/SectionComponets/ContactSection'
import HomeSection from '@/SectionComponets/HomeSection'
import PortfolioSection from '@/SectionComponets/PortfolioSection'
import Resume from '@/SectionComponets/Resume'
import SkillsSection from '@/SectionComponets/SkillsSection'
import RadialFloatingButton from '@/components/RadialFloatingButton/RadialFloatingButton'
import React from 'react'

const MainContent = () => {
    return (
        <main className="main-content">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <HomeSection />
            <AboutSection />
            <Resume />
            <SkillsSection />
            <PortfolioSection />
            <ContactSection />

            {/* Radial Floating Action Button */}
            <RadialFloatingButton />
        </main>
    )
}

export default MainContent