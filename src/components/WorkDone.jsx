import React from 'react'
import workdone_cardio from '../assets/works/cardiobot.png'
import workdone_mental from '../assets/works/mentalhealth.png'
import simplebtn from './button_simple.module.css'

function WorkDone() {
    return (
        <>
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
                                    <img src={workdone_mental} className='h-auto max-w-full' alt="MindEase-AI Chatbot" />
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
                                    <img src={workdone_cardio} className='h-auto max-w-full' alt="Cardio Chatbot" />
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
        </>
    )
}

export default WorkDone