import React from 'react'
import heroImg from '../assets/graphic_elements.png'
import gradientButton from './button_gradient.module.css'
import simplebtn from './button_simple.module.css'
import Services from './ServicesSection'
import Solutions from './SolutionsSection'
import AboutusAnimation from './aboutusAnimation'
import workdone_cardio from '../assets/works/cardiobot.png'
import linkicon from '../assets/icons/link.png'
import workdone_mental from '../assets/works/mentalhealth.png'
import Footer from './footer'
export default function Main() {
  return (
    <>
    <div className="main_container">
        <div className="overlay">
            <div className="overlay_container flex items-center justify-center">
                <section className="herosection"
                style={{
                    // border: '1px solid yellow',
                }}
                >
                    <div className="grid max-w-screen-xl px-8 lg:px-8 py-2 lg:py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 " 
                    style={{
                        // border: '1px solid blue',
                    }}
                    >
                        <div className="mr-auto place-self-center lg:col-span-7 lg:mr-10 order-2 lg:order-1"
                        style={{
                            // border: '1px solid red',
                        }}>
                            <h1 className="max-w-2xl lg:mb-4 mb-2 text-white lg:text-4xl md:text-4xl xs:text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white capitalize">Real Solutions with the power of AI</h1>
                            <p className="max-w-2xl lg:mb-6 mb-4 font-light text-white md:text-lg lg:text-xl dark:text-gray-400">Reach out to us for fast and trusted AI software for your business needs.</p>
                            
                            <a href="#" className={gradientButton.gradientBotton_demo}>
                                Request a Demo
                            </a> 
                        </div>
                        <div className="lg:col-span-5 flex justify-center items-start lg:items-center lg:justify-end lg:mt-0 my-6 order-1 lg:order-2"
                        style={{
                            // border: '1px solid blue',
                        }}
                        >
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
                    <a href="#" className={gradientButton.gradientBotton_contact}>
                        Contact Us
                    </a>
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
        <div className="works-done px-8 py-8">
            <div className="flex_container flex md:flex-row flex-col justify-center items-center gap-20 mb-8">
                <div className="title w-full md:w-2/3">
                    <h5 className='text-white text-3xl md:text-6xl'>Works we have done for our clients</h5>
                </div>
                <div className="browse-btn">
                    <a href="#" className={simplebtn.simpleButton}>Browse All &#8594;</a>
                </div>
            </div>
            <div className="grid_container">
                <div className="gridflex_container flex justify-center">
                    <div className="grid grid-cols-2">
                        <div className="grid_item1 px-6 py-5">
                            <div className="image">
                                <img src={workdone_mental} className='h-auto max-w-full' alt="MindEase-AI Chatbot"/>
                            </div>
                            <div className="title py-3">
                                <h5 className='text-white text-xl'>Mental Health ChatBot</h5>
                            </div>
                            <div className="work-card-footer">
                                <div className="readmorelink text-white text-sm pt-2">
                                    <a href="" className='underline'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="grid_item2 px-6 py-5">
                            <div className="image">
                                <img src={workdone_cardio} className='h-auto max-w-full' alt="Cardio Chatbot"/>
                            </div>
                            <div className="title py-3">
                                <h5 className='text-white text-xl'>Cardio Health ChatBot</h5>
                            </div>
                            <div className="work-card-footer border-t">
                                <div className="readmorelink text-white text-sm pt-2">
                                    <a href="" className='underline'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* lets talk */}
        <div className="letstalk_section my-20 p-20">
            <div className="letstalk_container grid md:grid-cols-2 grid-cols-1 md:gap-x-28 place-items-center">
                <div className="left_description md:w-4/5" >
                    <div className="title">
                        <div className="border-t-8 w-20 pb-2"></div>
                        <h5 className='text-xl md:text-5xl uppercase font-bold text-white'>Serving businesses by implementing<br/> AI</h5>
                    </div>
                    <div className="description mt-3">
                        <p className='text-md text-white'>AI enabled infrastructure helps us deliver the optimum product for your needs in ultra lightning time.</p>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-full w-12 h-12 md:w-24 md:h-24 mt-8">
                      <span className="text-dark md:text-lg text-xs text-center font-bold">LET'S<br/>TALK</span>
                    </div>
                </div>
                <div className="right_list md:w-4/5" style={{border: ""}}>
                    <div className="list_container max-w-sm mx-auto">
                        <ul className="overflow-hidden sm:rounded-md">
                            <li className="">
                                <div className="py-5 mx-3">
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'>
                                            <span className="text-3xl leading-6 font-medium text-white mr-5">01</span>
                                            <span className='text-xl leading-6 text-white'>Improving Business Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="border-t border-gray-200">
                                <div className="py-5 mx-3">
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'>
                                            <span className="text-3xl leading-6 font-medium text-white mr-5">02</span>
                                            <span className='text-xl leading-6 text-white'>Customized AI solutions</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="border-y border-gray-200">
                                <div className="py-5 mx-3">
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'>
                                            <span className="text-3xl leading-6 font-medium text-white mr-5">03</span>
                                            <span className='text-xl leading-6 text-white'>Best in className solutions</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* About us */}
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
                    <a href="" className={gradientButton.gradientBotton_contact}>Contact us</a>
                </div>
            </div>
        </div>
        {/* Footer */}
        <div className="footer mt-12">
            <Footer />
        </div>
    </>
  )
}
