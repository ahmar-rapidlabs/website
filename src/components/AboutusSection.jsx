import React from 'react'
import AboutusAnimation from './aboutusAnimation'
import { Link } from 'react-router-dom'
import gradientButton from './button_gradient.module.css'

function AboutusSection() {
  return (
    <>
        <div className='aboutus_section'>
            <div className="aboutus-container">
                <div className="aboutus_title">
                    <div className="title">               
                        <h6 className='text-white text-center text-sm capitalize'>About us</h6>
                    </div>
                    <div className="tagline text-white text-center mb-8">
                        <h5 className='text-5xl mb-3'>WHAT’S UNIQUE ABOUT US</h5>
                        <p className='italic'>We are dynamic, Creative and Innovative</p>
                    </div>
                </div>
                <div className="aboutus-zigzag">
                    <AboutusAnimation />
                </div>
                <div className="contactBtn flex justify-center">
                    <Link to="/contact" className={gradientButton.gradientBotton_contact}>Contact us</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutusSection