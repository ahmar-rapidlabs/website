import React from 'react'
import { Link } from 'react-router-dom'
function BlogCategory({title, description, img, category}) {
  return (
    <>
    <div className="blog_category_cards_content mx-10 2xl:mx-0">
        <div className="grid_container grid lg:grid-cols-3 gap-10 ">
            <div className="card-img flex justify-stretch items-stretch">
                <img src={img} alt="" className='max-w-full' />
            </div>
            <div className="card-content lg:col-span-2 flex flex-col justify-around gap-3">
                <div className="title">
                    <h2 className='text-4xl'>{title}</h2>
                </div>
                <div className="card-desc">
                   <p className='text-lg'>{description}</p> 
                </div>
                <div className="read-more-btn">
                <Link
                to={`/blog/${category}/1`}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                    Read More
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogCategory