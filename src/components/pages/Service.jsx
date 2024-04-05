import React from 'react'
import Services from '../ServicesSection'
import gradientButton from '../button_gradient.module.css'
import { Link } from 'react-router-dom'
import Solutions from '../SolutionsSection'
import WorkDone from '../WorkDone'
import LetstalkSection from '../LetstalkSection'
import AboutusSection from '../AboutusSection'

function Service() {
  return (
    <>
        <div className="our_serivces_main_container mt-16 mb-32">
            <div className="main_title mb-6">
                <h6 className='text-white text-center text-sm capitalize'>our services</h6>
            </div>
            <div className="tagline mb-20">
                <h1 className='text-white text-center text-4xl uppercase mb-6'>FROM IDEA-tO-DEVELOPMENT</h1>
                <p className='italic text-white text-center mt-2'>We provide services that resonate with business goal and individual interest.</p>
            </div>
            <div className="contact-btn text-center">
                <Link to="#" className={gradientButton.gradientBotton_contact}>
                    Contact Us
                </Link>
            </div>
        </div>
        <div className="main_services text-white mb-20 h-full">
            <Services />
        </div>
        <div className="main_solutions px-8">
            <Solutions />
        </div>
        {/* Works Done */}
        <WorkDone />
        {/* Lets talk */}
        <LetstalkSection/>
        {/* About Us */}

        <AboutusSection />
    </>
  )
}

export default Service