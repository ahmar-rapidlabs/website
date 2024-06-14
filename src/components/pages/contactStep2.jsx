import React, {useEffect} from 'react';

function ContactStep2({ selectedCategories, handleChange, additionalCategories }) {
    
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
                                    checked={additionalCategories.includes('Analytics Roadmaps')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="analytics-roadmaps-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                    checked={additionalCategories.includes('Data Mining')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="data-mining-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                    checked={additionalCategories.includes('Predictive Model')}

                                    onChange={handleChange}
                                />
                                <label htmlFor="predictive-model-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                    checked={additionalCategories.includes('Web Scrapping')}

                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="webscrapping-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                        checked={additionalCategories.includes('Other')}

                                        value="Other"
                                        className="hidden peer"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="other-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                    checked={additionalCategories.includes('Generative AI')}

                                    value="Generative AI"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="GenerativeAI" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                    checked={additionalCategories.includes('Computer Vision')}

                                    value="Computer Vision"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="ComputerVision" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                    checked={additionalCategories.includes('AI Chatbot')}

                                    value="AI Chatbot"
                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="AIChatbot" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                    checked={additionalCategories.includes('Time Series')}

                                    onChange={handleChange}
                                />
                                <label htmlFor="timeseries" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                        checked={additionalCategories.includes('Other')}

                                        value="Other"
                                        className="hidden peer"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="other-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
                                    id="customwebsites"
                                    name='customwebsites'
                                    value="Custom web portals"
                                    className="hidden peer"
                                    checked={additionalCategories.includes('Custom web portals')}

                                    onChange={handleChange}
                                />
                                <label htmlFor="customwebsites" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Custom websites</div>
                                    </div>
                                </label>
                            </div>
                            <div className="fs-tect-categ-2">
                                <input
                                    type="checkbox"
                                    id="CloudApplications"
                                    name='CloudApplications'
                                    value="Cloud Applications"
                                    checked={additionalCategories.includes('Cloud Applications')}

                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="CloudApplications" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Cloud Applications</div>
                                    </div>
                                </label>
                            </div>
                            <div className="fs-tect-categ-3">
                                <input
                                    type="checkbox"
                                    id="APIDevelopment"
                                    name='APIDevelopment'
                                    value="API Development"
                                    checked={additionalCategories.includes('API Development')}

                                    className="hidden peer"
                                    onChange={handleChange}
                                />
                                <label htmlFor="APIDevelopment" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">API Development</div>
                                    </div>
                                </label>
                            </div>
                            <div className="fs-tect-categ-4">
                                <input
                                    type="checkbox"
                                    id="uiuxdev"
                                    name='uiuxdev'
                                    value="UI/UX Design"
                                    className="hidden peer"
                                    checked={additionalCategories.includes('UI/UX Design')}

                                    onChange={handleChange}
                                />
                                <label htmlFor="uiuxdev" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                    <div className="block">
                                        <div className="w-full text-sm text-nowrap md:text-md font-normal">UI/UX Development</div>
                                    </div>
                                </label>
                            </div>
                            {!otherCheckboxRendered && (otherCheckboxRendered = true) && (
                                <div className="fs-tect-categ-4">
                                    <input
                                        type="checkbox"
                                        id="other-option"
                                        checked={additionalCategories.includes('Other')}

                                        name='other'
                                        value="Other"
                                        className="hidden peer"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="other-option" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
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
            {/* Budget */}
            <div className="yourbudget-main mx-6 md:ml-32 mt-7">
                <div className="yourbudget">
                    <div className="title mb-6">
                        <h5 className='text-white text-lg md:text-2xl uppercase'>What is your budget ?</h5>
                    </div>
                    <div className="budgetcheckboxes flex flex-wrap gap-4 mt-3">
                        <div className="budget1">
                            <input
                                type="checkbox"
                                id="less_then_tenk"
                                name='ltTenk'
                                value="Less Then 10K USD"
                                className="hidden peer"
                                checked={additionalCategories.includes('Less Then 10K USD')}
                                
                                onChange={handleChange}
                            />
                            <label htmlFor="less_then_tenk" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                <div className="block">
                                    <div className="w-full text-sm text-nowrap md:text-md font-normal">&#60; $10,000</div>
                                </div>
                            </label>
                        </div>
                        <div className="budget2">
                            <input
                                type="checkbox"
                                id="ten-to-twentyfive"
                                name='ten-tf'
                                value="Between 10K to 25K USD"
                                checked={additionalCategories.includes('Between 10K to 25K USD')}

                                className="hidden peer"
                                
                                onChange={handleChange}
                            />
                            <label htmlFor="ten-to-twentyfive" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                <div className="block">
                                    <div className="w-full text-sm text-nowrap md:text-md font-normal">$10,000 - $25,000</div>
                                </div>
                            </label>
                        </div>
                        <div className="budget3">
                            <input
                                type="checkbox"
                                id="twentyfive-to-hundred"
                                name='tf-hund'
                                checked={additionalCategories.includes('Between 25k to 100k USD')}

                                value="Between 25k to 100k USD"
                                className="hidden peer"
                                
                                onChange={handleChange}
                            />
                            <label htmlFor="twentyfive-to-hundred" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                <div className="block">
                                    <div className="w-full text-sm text-nowrap md:text-md font-normal">$25,000 - $100,000</div>
                                </div>
                            </label>
                        </div>
                        <div className="budget4">
                            <input
                                type="checkbox"
                                id="morethanhundred"
                                name='morethanhundred'
                                checked={additionalCategories.includes('More than 100k USD')}

                                value="More than 100k USD"
                                className="hidden peer"
                                
                                onChange={handleChange}
                            />
                            <label htmlFor="morethanhundred" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                <div className="block">
                                    <div className="w-full text-sm text-nowrap md:text-md font-normal">$100,000 +</div>
                                </div>
                            </label>
                        </div>
                    </div>


                </div>
            </div>
            {/* estimated timeframe */}
            <div className="estTimeframe-main mx-6 md:ml-32 mt-7">
                <div className="estTimeframe">
                    <div className="title mb-6">
                        <h5 className='text-white text-md md:text-2xl uppercase'>What is your estimated time frame ?</h5>
                    </div>
                    <div className="estTimecheckboxes flex flex-wrap gap-4 mt-3">
                        <div className="est1">
                            <input
                                type="checkbox"
                                id="one-to-three"
                                name='one-to-three'
                                value="One to Three Months"
                                checked={additionalCategories.includes('One to Three Months')}

                                className="hidden peer"
                                
                                onChange={handleChange}
                            />
                            <label htmlFor="one-to-three" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                <div className="block">
                                    <div className="w-full text-sm text-nowrap md:text-md font-normal">1-3 months</div>
                                </div>
                            </label>
                        </div>
                        <div className="est2">
                            <input
                                type="checkbox"
                                id="three-to-six"
                                name='three-to-six'
                                value="Three to Six Months"
                                checked={additionalCategories.includes('Three to Six Months')}

                                className="hidden peer"
                                
                                onChange={handleChange}
                            />
                            <label htmlFor="three-to-six" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                <div className="block">
                                    <div className="w-full text-sm text-nowrap md:text-md font-normal">3-6 months</div>
                                </div>
                            </label>
                        </div>
                        <div className="est3">
                            <input
                                type="checkbox"
                                id="six-to-oneyr"
                                name='six-to-oneyr'
                                checked={additionalCategories.includes('Six Months to One Year')}

                                value="Six Months to One Year"
                                className="hidden peer"
                                
                                onChange={handleChange}
                            />
                            <label htmlFor="six-to-oneyr" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                <div className="block">
                                    <div className="w-full text-sm text-nowrap md:text-md font-normal">6 months to 1 year</div>
                                </div>
                            </label>
                        </div>
                        <div className="est4">
                            <input
                                type="checkbox"
                                id="more-oneyr"
                                checked={additionalCategories.includes('More Than One year')}
                                name='more-oneyr'
                                value="More Than One year"
                                className="hidden peer"
                                
                                onChange={handleChange}
                            />
                            <label htmlFor="more-oneyr" className="bg-zinc-600 inline-flex items-center justify-between w-full md:py-5 md:px-9 py-3 px-7 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600">
                                <div className="block">
                                    <div className="w-full text-sm text-nowrap md:text-md font-normal">More than 1 year</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactStep2;
