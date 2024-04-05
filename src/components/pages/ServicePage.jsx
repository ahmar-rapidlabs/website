import React from 'react';

function ServicePage(props) {
  return (
    <>
    <div className="individual_service_page_container">
        <div className="overlay">
        <div>{props.title}</div>
      <div>{props.description}</div>
        </div>
    </div>

    
      {/* Loop through all keys in the serviceslist dictionary */}
      {Object.keys(props.serviceslist).map((key) => (
        <div key={key}>
          {/* Display key (service name) */}
          <div>{key}</div>
          {/* Display value (service description) */}
          <div>{props.serviceslist[key]}</div>
        </div>
      ))}
      <div>
      {props.technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </div>
      <div><img src={props.image} alt="" /></div>
      
    </>
  );
}

export default ServicePage;
