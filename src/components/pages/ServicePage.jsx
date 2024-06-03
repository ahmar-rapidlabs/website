import React from 'react';
import gradientButton from '../button_gradient.module.css'
import negative from '../../assets/svg/negative.svg'
import positive from '../../assets/svg/positive.svg'
import WorkDone from '../WorkDone';
import { Link } from 'react-router-dom'

function ServicePage(props) {
    return (
        <>
            <div className="individual_service_page_container py-10">
                <div className="overlay md:mx-14 mx-5">
                    <div className='mb-3'>
                        <h1 className='service_title text-4xl md:text-6xl'>{props.title}</h1>
                    </div>
                    <div className=''>
                        <p className='text-xl md:text-3xl'>{props.description}</p>
                    </div>
                    <div className="descover-btn mt-4 md:mt-10">
                        <Link to="/contact" className={gradientButton.gradientBotton_demo}>Discuss your idea</Link>
                    </div>
                </div>
            </div>
            <div className="services_section_title my-11 mx-14">
                <h2 className='capitalize md:text-5xl text-4xl'>
                    {props.title}
                </h2>
            </div>
            <div className="services_list grid md:grid-cols-2 gap-x-8 md:mx-14 mx-8">
                <div className="container_pic place-self-center">
                    <img src={props.image} alt="Unable to load" className='h-96 md:h-auto max-w-full' />
                </div>
                <div className="container_list max-w-xl">
                    <div ClassName="divide-y divide-blue-200">
                        {/* Loop through all keys in the serviceslist dictionary */}
                        {Object.keys(props.serviceslist).map((key, index) => (
                            <div key={key} className='py-6'>
                                <details className="group" open={index === 0}>
                                    <summary
                                        className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 transition-all duration-500">
                                        {key}
                                        <div>
                                            <img src={positive} alt="Unable to load" className='block h-5 w-5 group-open:hidden transition-transform duration-500' />
                                            <img src={negative} alt="Unable to load" className='hidden h-5 w-5 group-open:block transition-transform duration-500' />
                                        </div>
                                    </summary>
                                    <div className="pb-4 text-secondary-500 transition-all duration-500">{props.serviceslist[key]}</div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="tehnologies_used_container mt-12 py-10">
                <div className="tech_container mx-14">
                {props.technologies && (
                    <>
                    <div className="techs-used-serv-title mb-4">
                        <h2 className='capitalize text-4xl md:text-5xl'>Technologies we use</h2>
                    </div>
                    <div className="detail-tag-line mb-12">
                        <p>See what Rapid Labs are working with while creating your next AI/ML solution.</p>
                    </div>
                    </>
                    )}
                    <div className="pills mb-5 flex flex-wrap justify-center items-center gap-4 ">
                        {props.technologies && Object.entries(props.technologies).map(([techName, techObject], index) => {
                            // Check if the techObject exists and is an object
                            if (techObject && typeof techObject === 'object') {
                                // Find the key containing the URL
                                const imageUrlKey = Object.keys(techObject).find(key => typeof techObject[key] === 'string');
                                // Get the URL from the found key
                                const imageUrl = techObject[imageUrlKey];
                                return (
                                    <span key={index} className="text-lg text-white hover:bg-indigo-900 hover:cursor-pointer font-medium px-2.5 py-1.5 rounded-b-lg rounded-r-lg dark:bg-gray-700 dark:text-gray-400 border border-indigo-500">
                                        <img src={imageUrl} alt={techName} className="inline-block w-6 h-6 mr-2" />
                                        {techName}
                                    </span>
                                );
                            } else {
                                return null; // Render nothing if technologies attribute is not correctly formatted
                            }
                        })}

                    </div>
                </div>
            </div>
            <WorkDone />
        </>
    );
}

export default ServicePage;
