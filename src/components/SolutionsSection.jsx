import React from 'react'
import SolutionsCard from './SolutionsCard'
import sol_gen from '../assets/solutions/gen_ai.png'
import sol_appdev from '../assets/solutions/sol_appdev.png'
import sol_chatbot from '../assets/solutions/sol_chatbot.png'
import sol_compvision from '../assets/solutions/sol_compvision.png'
import sol_financial_serv from '../assets/solutions/sol_financial_serv.png'
import sol_industrial_app from '../assets/solutions/sol_industrial_app.png'

function SolutionsSection() {
  return (
    <div>
        <div className="flex flex-col items-start mb-8">
            <h2 className="font-normal relative pb-2 text-white text-6xl">Solutions We Serve</h2>
            <div className="w-96 border-b-4" 
            style={{
                border: "2px solid #4F3DFE"
            }}
            ></div>
        </div>
        <div className="solutions_container">
            <div className="overlay">
              <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-5 mb-36">
                <SolutionsCard 
                id='01'
                name='Computer Vision' 
                image={sol_compvision} 
                description="Enable computers to interpret and understand visual information from the world around them, transforming images and videos into actionable data." />
                <SolutionsCard 
                id='02' 
                name='Generative AI' 
                image={sol_gen}
                description="Creates new content, such as text, 
                images, music, or code, based on 
                learning from a vast amount of 
                existing data." 
                />
                <SolutionsCard 
                id='03' 
                name='AI Chatbot' 
                image={sol_chatbot}
                description="Software system designed to simulate 
                human-like conversation with users, 
                using natural language processing to 
                understand and respond to queries 
                automatically."
                 />
                <SolutionsCard 
                id='04' 
                name='Application Development' 
                image={sol_appdev}
                description="Provide tools and frameworks to 
                design, develop, deploy, and maintain 
                software applications efficiently and 
                effectively."
                 />
                <SolutionsCard 
                id='05'
                name='AI Industrial Applications' 
                image={sol_industrial_app} 
                description="Leverage machine learning, computer 
                vision, and data analytics to optimize 
                manufacturing processes, improve 
                equipment maintenance, and enhance 
                supply chain efficiency."
                />
                <SolutionsCard 
                id='06' 
                name='Financial Services' 
                image={sol_financial_serv}
                description="Funding and investment support, 
                financial risk management, and 
                tailored financial products and advice 
                to drive innovation and growth."
                />
              </div>
            </div>
        </div>


       
    </div>
  )
}

export default SolutionsSection