import React from 'react'
import rightarrow from '../../../assets/icons/r_arrow.png'
import Service from '../Service'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
        <div className='text-white aboutus_main_container'>
            <div className="aboutus_herosection_container py-0 md:py-10">
                <div className="overlay flex justify-center items-center">
                    <div className="overlay_content max-w-screen-lg px-6 md:py-0 py-12">
                        <h1 className='font-semibold text-3xl md:text-6xl md:text-center mb-10 uppercase'>Top professionals turning your business idea into a real AI solution</h1>
                        <p className='text-lg md:text-2xl mb-16 text-pretty'>Rabid Labs specializes in custom software development, creating and evolving solutions and products to fuel business growth. A deep understanding of global markets, and unmatched technical expertise, our team has everything you need to create great web service platform, mobile application and Al.</p>
                        <div className="chatbtn justify-center flex">
                            <Link to='/contact' className="aboutus_herosec_chatbtn flex items-baseline gap-4 text-white focus:ring-4 focus:ring-blue-300 text-lg md:text-xl rounded-md px-8 py-2.5 me-2 mb-2"><span>Let's Chat </span><span><img src={rightarrow} alt={rightarrow} className=''  /></span> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Service />
        </div>
    </>
  )
}

export default AboutUs