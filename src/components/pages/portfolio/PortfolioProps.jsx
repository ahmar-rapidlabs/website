import React from 'react'
import PortfolioItems from './PortfolioItems'
import cardiochatbot from '../../../assets/works/cardiobot.png'
import mentalhealh from '../../../assets/works/mentalhealth2.png'
import legalbot from '../../../assets/works/legalbot.png'
import virtualinterior from '../../../assets/works/virtualinterior.png'
function PortfolioProps() {
  return (
    <>
    <div className="portfolioPageContainer text-white mx-5 md:mx-28">
        <div className="heroSectionPortfolio text-white py-10">
            <div className='mb-3'>
              <h1 className='portolio_title text-4xl md:text-6xl capitalize'>Works we have done for our clients</h1>
              <p className="mt-4 text-lg">Examples of the work we’ve done with established brands, growing businesses, and venture-backed startups.</p>
            </div>
        </div>
        <PortfolioItems 
        title="Mental Health Chatbot"
        description="Personal Companion for Mental business Health Wellness. Empowering you with AI-driven support, anytime, anywhere."
        img={mentalhealh}
        />
        <PortfolioItems 
        title="Cardio-AI Chatbot"
        description="Cardio-AI Chatbot is an intelligent application designed to provide users with instant, AI-driven advice and information on cardiovascular health, facilitating early detection and preventive measures for heart-related conditions."
        img={cardiochatbot}
        />
        <PortfolioItems 
        title="AI Legal Chatbot"
        description="An innovative chatbot application designed to provide 
        users with instant access to local law information and 
        assistance in drafting legal documents.
        "
        img={legalbot}
        />
        <PortfolioItems 
        title="Virtual Interior Design"
        description="An AI-driven platform that helps users visualize and plan interior designs for their homes. Users can input room dimensions, select styles, and the AI suggests layouts, furniture, and color schemes."
        img={virtualinterior}
        />
    </div>
    </>
  )
}

export default PortfolioProps