import React from 'react'
import rightarrow from '../../../assets/icons/r_arrow.png'
import Solutions from '../../SolutionsSection'
import WorkDone from '../../WorkDone'
import LetstalkSection from '../../LetstalkSection'
import AboutusSection from '../../AboutusSection'
import Services from '../../ServicesSection'
import ServicesPage from '../ServicesPage'
import Service from '../Service'

function AboutUs() {
  return (
    <>
        <div className='text-white aboutus_main_container h-full'>
            <div className="aboutus_herosection_container py-10">
                <div className="overlay flex justify-center items-center">
                    <div className="overlay_content max-w-screen-lg">
                        <h1 className='font-semibold text-6xl text-center mb-10'>Top professionals turning your business idea into a real AI solution</h1>
                        <p className='text-2xl mb-16'>Rabid Labs specializes in custom software development, creating and evolving solutions and products to fuel business growth. A deep understanding of global markets, and unmatched technical expertise, our team has everything you need to create great web service platform, mobile application and Al.</p>
                        <div className="chatbtn justify-center flex">
                            <button type="button" className="aboutus_herosec_chatbtn flex items-baseline gap-4 text-white focus:ring-4 focus:ring-blue-300 text-xl rounded-md px-8 py-2.5 me-2 mb-2"><span>Let's Chat </span><span><img src={rightarrow} alt={rightarrow} className=''  /></span> </button>
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