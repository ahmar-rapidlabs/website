import React from 'react';
import getStarted from './button_simple.module.css'
import ServiceCard from "./ServiceCard";
import ai from '../assets/icons/service_ai.png'
import cto from '../assets/icons/service_cto.png'
import fullstack from '../assets/icons/service_fullstack.png'
import analytics from '../assets/icons/service_analytics.png'
const ServicesSection = () => {
    return (
        <div className="md:flex">
      <div className="services-container text-center py-4 px-4 flex md:flex-col flex-row items-center md:items-center justify-between md:justify-center md:mb-0 mb-16 lg:basis-2/4"
      style={{
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }}
      >
        <h2 className='text-white text-3xl md:text-6xl leading-relaxed mb-0 md:mb-6'>Services</h2>
        <a href="" className={getStarted.simpleButton_lg}>Get Started</a>
      </div>
      <div className="lg:basis-2/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-0">
        <ServiceCard
          title="Artificial intelligence/Machine learning"
          description="Our top-tier AI/ML engineering experts leverage the full potential of AI to take your product to the next level."
          icon={ai}
        />
        <ServiceCard
            title="Data analytics"
            description="Transform data into actionable insights with our Data Analytics services, leveraging cutting-edge techniques to drive your business forward."
            icon={analytics}
          />
          <ServiceCard
            title="Full Stack Development"
            description="We offer comprehensive web and mobile app solutions, from backend to frontend, ensuring a seamless user experience."
            icon={fullstack}
          />
          <ServiceCard
            title="CTO Consultancy"
            description="Enhance your strategic vision with our CTO Consultancy services, offering expert guidance to navigate technology landscapes and drive business growth."
            icon={cto}
          />
      </div>
    </div>
    );
  };
  
  export default ServicesSection;
  