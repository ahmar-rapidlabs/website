import React from 'react'
import heroImg from '../assets/graphic_elements.png'
import gradientButton from './button_gradient.module.css'
import simplebtn from './button_simple.module.css'
import Services from './ServicesSection'
import Solutions from './SolutionsSection'
import WorkDone from './WorkDone'
import Footer from './footer'
import { Link } from 'react-router-dom'
import LetstalkSection from './LetstalkSection'
import AboutusSection from './AboutusSection'
export default function Main() {
  return (
    <>
    <div className="main_container">
        <div className="overlay">
            <div className="overlay_container flex items-center justify-center">
                <section className="herosection">
                    <div className="grid max-w-screen-xl px-8 lg:px-8 py-2 lg:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7 lg:mr-10 order-2 lg:order-1">
                            <h1 className="max-w-2xl lg:mb-4 mb-2 text-white lg:text-4xl md:text-4xl xs:text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white capitalize">Real Solutions with the power of AI</h1>
                            <p className="max-w-2xl lg:mb-6 mb-4 font-light text-white md:text-lg lg:text-xl dark:text-gray-400">Reach out to us for fast and trusted AI software for your business needs.</p>
                            <Link to="#" className={gradientButton.gradientBotton_demo}>
                                Request Link Demo
                            </Link> 
                        </div>
                        <div className="lg:col-span-5 flex justify-center items-start lg:items-center lg:justify-end lg:mt-0 my-6 order-1 lg:order-2">
                            <img src={heroImg} className='h-auto lg:max-w-xs xs:max-w-xxs ' alt="mockup"/>
                        </div>                
                    </div>
                </section>
                </div>
            </div>
            {/* Our services */}
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
        </div>
        <div className="main_services text-white mb-20 h-full">
            <Services />
        </div>
        <div className="main_solutions px-8">
            <Solutions />
        </div>
        {/* Works Done */}
        <WorkDone />

        {/* lets talk */}
        <LetstalkSection/>
        {/* About us */}
        <AboutusSection />
        {/* Footer */}
        <Footer />

    </>
  )
}
