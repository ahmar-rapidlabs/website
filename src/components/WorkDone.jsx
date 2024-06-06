import React, { useState } from 'react';
import workdone_cardio from '../assets/works/cardiobot_landing.png';
import workdone_mental from '../assets/works/mentalhealth.png';
import simplebtn from './button_simple.module.css';
import { Link } from 'react-router-dom';
import deepfake from "../assets/works done carousel/deepfake.png";
import interior from "../assets/works done carousel/interior.png";
import legal from "../assets/works done carousel/legal.png";
import ocr from "../assets/works done carousel/ocr.png";
import trumor from "../assets/works done carousel/trumor.png";
import tryon from "../assets/works done carousel/tryon.png";

function WorkDone() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const items = [
        {
            img: workdone_mental,
            alt: "MindEase-AI Chatbot",
            title: "Mental Health ChatBot",
            link: "/portfolio"
        },
        {
            img: workdone_cardio,
            alt: "Cardiovesular Chatbot",
            title: "Cardiovesular Chatbot",
            link: "/portfolio"
        },
        {
            img: legal,
            alt: "AI Legal Chatbot",
            title: "AI Legal Chatbot",
            link: "/portfolio"
        },
        {
            img: trumor,
            alt: "Tumor Detection",
            title: "Tumor Detection",
            link: "/portfolio"
        },
        {
            img: deepfake,
            alt: "Deepfake Sensor",
            title: "Deepfake Sensor",
            link: "/portfolio"
        },
        {
            img: ocr,
            alt: "Extract unstructured data from PDF into JSON Format",
            title: "Extract unstructured data from PDF into JSON Format",
            link: "/portfolio"
        },
        {
            img: interior,
            alt: "Virtual Interior Design",
            title: "Virtual Interior Design",
            link: "/portfolio"
        },
        {
            img: tryon,
            alt: "Virtual Try-On",
            title: "Virtual Try-On",
            link: "/portfolio"
        }
    ];

    // Group items into pairs for each slide
    const slides = [];
    for (let i = 0; i < items.length; i += 2) {
        slides.push(items.slice(i, i + 2));
    }

    return (
        <div className="carousel-container">
            <div className="relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${index === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <div className="flex_container flex md:flex-row flex-col justify-center px-6 items-center gap-12 md:gap-20 mb-8">
                            <div className="title w-full md:w-2/3">
                                <h5 className='text-white text-3xl md:text-6xl'>Works we have done for our clients</h5>
                            </div>
                            <div className="browse-btn md:ms-none ms-auto mr-4">
                                <Link to="/portfolio" className={simplebtn.simpleButton}>Browse All →</Link>
                            </div>
                        </div>
                        <div className="grid_container mt-16">
                            <div className="gridflex_container flex justify-center">
                                <div className="grid md:grid-cols-2 grid-cols-1">
                                    {slide.map((item, idx) => (
                                        <div key={idx} className="grid_item px-6 py-5">
                                            <div className="image">
                                                <img src={item.img} className='h-auto max-w-full' alt={item.alt} />
                                            </div>
                                            <div className="title py-3">
                                                <h5 className='text-white text-xl'>{item.title}</h5>
                                            </div>
                                            <div className="work-card-footer">
                                                <div className="readmorelink text-white text-sm pt-2">
                                                    <Link to={item.link} className='underline'>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className="hidden md:flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                            aria-current={index === currentSlide}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </div> */}
                <button
                    type="button"
                    className="hidden md:flex absolute top-1/2 left-16 transform -translate-y-1/2 z-30 justify-center items-center cursor-pointer group focus:outline-none"
                    onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </span>
                </button>
                <button
                    type="button"
                    className="hidden md:flex absolute top-1/2 right-16 transform -translate-y-1/2 z-30 justify-center items-center cursor-pointer group focus:outline-none"
                    onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
                >
                    <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default WorkDone;
