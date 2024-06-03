import React from 'react';

function ContactStep2({ selectedCategories, handleChange }) {
    let otherCheckboxRendered = false;

    return (
        <div>
            <div className="select-cat-tec-main-step2 mx-6 md:ml-32 mt-7">
                <div className="title mb-6">
                    <h5 className='text-white text-md md:text-2xl uppercase'>Which services you want ?</h5>
                </div>
                <div className="select-tect-categ-step2 flex flex-wrap gap-4 mt-3">
                    {selectedCategories.includes('Data Analysis') && (
                        <>
                            <div className="da-tect-categ-1">
                                <input
                                    type="checkbox"
                                    id="analytics-roadmaps-option"
                                    name='analyticsRoadmaps'
                                    value="Analytics Roadmaps"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="analytics-roadmaps-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Analytics Roadmaps</div>
                                    </div>
                                </label>
                            </div>
                            <div className="da-tect-categ-2">
                                <input
                                    type="checkbox"
                                    id="data-mining-option"
                                    name='dataMining'
                                    value="Data Mining"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="data-mining-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Data Mining</div>
                                    </div>
                                </label>
                            </div>
                            <div className="da-tect-categ-3">
                                <input
                                    type="checkbox"
                                    id="predictive-model-option"
                                    name='predictivemodel'
                                    value="Predictive Model"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="predictive-model-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Predictive Model</div>
                                    </div>
                                </label>
                            </div>
                            <div className="da-tect-categ-4">
                                <input
                                    type="checkbox"
                                    id="webscrapping-option"
                                    name='webscrapping'
                                    value="Web Scrapping"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="webscrapping-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Web Scrapping</div>
                                    </div>
                                </label>
                            </div>
                            {!otherCheckboxRendered && (otherCheckboxRendered = true) && (
                                <div className="da-tect-categ-4">
                                    <input
                                        type="checkbox"
                                        id="other-option"
                                        name='other'
                                        value="Other"
                                        className="hidden peer"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="other-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                        <div className="block">
                                            <div className="w-full text-sm text-nowrap md:text-md font-normal">Other</div>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </>
                    )}
                    {selectedCategories.includes('Artificial Intelligence / Machine Learning') && (
                        <>
                            <div className="ai-tect-categ-1">
                                <input
                                    type="checkbox"
                                    id="GenerativeAI"
                                    name='GenerativeAI'
                                    value="Generative AI"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="GenerativeAI" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Generative AI</div>
                                    </div>
                                </label>
                            </div>
                            <div className="ai-tect-categ-2">
                                <input
                                    type="checkbox"
                                    id="ComputerVision"
                                    name='ComputerVision'
                                    value="Computer Vision"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="ComputerVision" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Computer Vision</div>
                                    </div>
                                </label>
                            </div>
                            <div className="ai-tect-categ-3">
                                <input
                                    type="checkbox"
                                    id="AIChatbot"
                                    name='AIChatbot'
                                    value="AI Chatbot"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="AIChatbot" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">AI Chatbot</div>
                                    </div>
                                </label>
                            </div>
                            <div className="ai-tect-categ-4">
                                <input
                                    type="checkbox"
                                    id="timeseries"
                                    name='timeseries'
                                    value="Time Series"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="timeseries" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Time Series</div>
                                    </div>
                                </label>
                            </div>
                            {!otherCheckboxRendered && (otherCheckboxRendered = true) && (
                                <div className="ai-tect-categ-4">
                                    <input
                                        type="checkbox"
                                        id="other-option"
                                        name='other'
                                        value="Other"
                                        className="hidden peer"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="other-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                        <div className="block">
                                            <div className="w-full text-sm text-nowrap md:text-md font-normal">Other</div>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </>
                    )}
                    {selectedCategories.includes('Full Stack Development') && (
                        <>
                            <div className="fs-tect-categ-1">
                                <input
                                    type="checkbox"
                                    id="Customwebportals"
                                    name='Customwebportals'
                                    value="Custom web portals"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="Customwebportals" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Custom web portals</div>
                                    </div>
                                </label>
                            </div>
                            <div className="fs-tect-categ-2">
                                <input
                                    type="checkbox"
                                    id="ecommercesolutions"
                                    name='ecommercesolutions'
                                    value="E-commerce solutions"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="ecommercesolutions" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">E-commerce solutions</div>
                                    </div>
                                </label>
                            </div>
                            <div className="fs-tect-categ-3">
                                <input
                                    type="checkbox"
                                    id="APIDevelopment"
                                    name='APIDevelopment'
                                    value="API Development"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="APIDevelopment" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">API Development</div>
                                    </div>
                                </label>
                            </div>
                            <div className="fs-tect-categ-4">
                                <input
                                    type="checkbox"
                                    id="cmsdevelopment"
                                    name='cmsdevelopment'
                                    value="CMS development"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="cmsdevelopment" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">CMS development</div>
                                    </div>
                                </label>
                            </div>
                            {!otherCheckboxRendered && (otherCheckboxRendered = true) && (
                                <div className="fs-tect-categ-4">
                                    <input
                                        type="checkbox"
                                        id="other-option"
                                        name='other'
                                        value="Other"
                                        className="hidden peer"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="other-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-900 hover:bg-indigo-600">
                                        <div className="block">
                                            <div className="w-full text-sm text-nowrap md:text-md font-normal">Other</div>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactStep2;
