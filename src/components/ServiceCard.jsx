import React from 'react';

const ServiceCard = ({ title, description, icon, url }) => {
    return (
        <a href={`/services/${url}`} className="service-card text-white p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        style={{
            border: "1px solid rgba(255, 255, 255, 0.2)"
          }}>
        <div className={`text-indigo-500 mb-4`}>
          <img className="h-auto max-w-full" src={icon}/>
        </div>
        <h3 className="font-semibold capitalize text-xl mb-3">{title}</h3>
        <p className="text-gray-300 text-base mb-6">{description}</p>
        <div>
        <a href={`/services/${url}`} className="card-learn-more py-2 px-3.5 rounded-xl text-white text-sm transition duration-300 ease-in-out">
          Learn more
        </a>
        </div>
      </a>
    );
  };
  
  export default ServiceCard;
  