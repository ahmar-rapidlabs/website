import React from 'react'

function LetstalkSection() {
  return (
    <>
    <div className="letstalk_section my-20 p-20">
            <div className="letstalk_container grid md:grid-cols-2 grid-cols-1 md:gap-x-28 place-items-center">
                <div className="left_description md:w-4/5" >
                    <div className="title">
                        <div className="border-t-8 w-20 pb-2"></div>
                        <h5 className='text-xl md:text-5xl uppercase font-bold text-white'>Serving businesses by implementing<br/> AI</h5>
                    </div>
                    <div className="description mt-3">
                        <p className='text-md text-white'>AI enabled infrastructure helps us deliver the optimum product for your needs in ultra lightning time.</p>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-full w-20 h-20 md:w-24 md:h-24 mt-8">
                      <span className="md:text-lg text-md text-center font-bold" style={{color: "#000"}}>LET'S<br/>TALK</span>
                    </div>
                </div>
                <div className="right_list md:w-4/5" style={{border: ""}}>
                    <div className="list_container max-w-sm mx-auto">
                        <ul className="overflow-hidden sm:rounded-md">
                            <li className="">
                                <div className="py-5 mx-3">
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'>
                                            <span className="text-3xl leading-6 font-medium text-white mr-5">01</span>
                                            <span className='text-xl leading-6 text-white'>Improving Business Analytics</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="border-t border-gray-200">
                                <div className="py-5 mx-3">
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'>
                                            <span className="text-3xl leading-6 font-medium text-white mr-5">02</span>
                                            <span className='text-xl leading-6 text-white'>Customized AI solutions</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="border-y border-gray-200">
                                <div className="py-5 mx-3">
                                    <div className="flex items-center justify-between">
                                        <div className='flex items-center'>
                                            <span className="text-3xl leading-6 font-medium text-white mr-5">03</span>
                                            <span className='text-xl leading-6 text-white'>Best in className solutions</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LetstalkSection