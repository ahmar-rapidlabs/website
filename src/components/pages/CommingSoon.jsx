import React from 'react'
import CommingSoon_img from '../../assets/Comingsoon.png'
function CommingSoon() {
  return (
    <>
        <div className='commingSoon_container flex justify-center items-center py-10'>
            <div className="comming_img">
                <img src={CommingSoon_img} alt={CommingSoon_img} className='h-auto w-full-max' />
            </div>
        </div>

    </>
  )
}

export default CommingSoon