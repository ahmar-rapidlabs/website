import React from 'react'
import SolutionsCard from './SolutionsCard'

function SolutionsSection() {
  return (
    <div>
        <div class="flex flex-col items-start mb-8">
            <h2 class="font-normal relative pb-2 text-white text-6xl">Solutions We Serve</h2>
            <div class="w-96 border-b-4" 
            style={{
                border: "2px solid #4F3DFE"
            }}
            ></div>
        </div>
        <div className="solutions_container">
            <div className="overlay">
                
            </div>
        </div>


        <SolutionsCard id='1' />
        <SolutionsCard id='2' />
        <SolutionsCard id='3' />
        <SolutionsCard id='4' />
        <SolutionsCard id='5' />
        <SolutionsCard id='6' />
    </div>
  )
}

export default SolutionsSection