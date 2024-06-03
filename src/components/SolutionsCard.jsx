import React from 'react'

function SolutionsCard(props) {
  return (
    <>
      <div>
        {/* <div className="group relative isolate flex overflow-hidden rounded-2xl px-8 pb-8 pt-40  mx-auto mt-6 hover:cursor-pointer">
            <img src={props.image} alt={props.name} className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div className="z-10 hidden group-hover:block transition-opacity duration-300 ease-in-out overflow-hidden">
                <h3 className="text-6xl font-bold text-white mb-6 border-b-4 w-16">{props.id}</h3>
                <div className="text-5xl leading-6 text-white mb-6">{props.name}</div>
                <p className="text-white text-3xl capitalize">{props.description}</p>
            </div>
            <div className="z-10 should_hide group-hover:hidden transition-opacity duration-300 ease-in-out">
                <h3 className="text-6xl font-bold text-white mb-6 border-b-4 w-16">{props.id}</h3>
                <div className="text-5xl leading-6 text-white mb-7">{props.name}</div>
            </div>
        </div> */}

              <div className='flex items-center justify-center mb-6 md:mb-0'>
                <div className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
                  <div className="z-10 px-8 group-hover:hidden transition-opacity duration-300 ease-in-out absolute bottom-0 left-0 right-0 pb-4">
                    <h3 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white mb-6 border-b-4 w-9 md:w-16">{props.id}</h3>
                    <div className="lg:text-5xl md:text-3xl text-2xl leading-6 text-white mb-7">{props.name}</div>
                  </div>
                  <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                      <div>
                          <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                              <div className="opacity-100 text-sm">
                                <h3 className="lg:text-6xl md:text-4xl text-lg font-bold text-white md:mb-6 mb-0 border-b-2 md:border-b-4 w-5 md:w-16">{props.id}</h3>
                                <div className="lg:text-5xl md:text-3xl text-sm leading-6 text-white md:mb-6 mb-2">{props.name}</div>
                                <p className="text-white md:text-3xl text-sm capitalize">{props.description}</p>
                              </div>
                          </div>
                      </div>
                  </div>
                    <img alt="" className="inset-0 h-full w-full object-cover group-hover:scale-110 transition duration-300 ease-in-out" src={props.image}/>
                </div>
              </div>
            </div>

    </>
  )
}

export default SolutionsCard