import React from 'react';
import LinkIcon from '../../../assets/icons/link.png';
function PortfolioItems({ title, description, img }) {
  return (
    <div className='portfolioItemsList '>
      <div className='PortfolioItemLink'>
          <div className="link-icon flex justify-end pr-6 pt-6 pb-8 md:pb-0">
              <a href="" className=''><img src={LinkIcon} alt={LinkIcon} className='h-auto max-w-full' /></a>
          </div>
          <a href='#' className=" flex md:flex-row flex-col justify-center gap-8 px-12 pb-12">
            <div className="portfolioprojimg basis-3/4 mr-0 md:mr-10" >
                <img src={img} alt={title} className="" />
            </div>
            <div className="portfolioprojdesc basis-3/4 flex flex-col justify-center">
              <h2 className="md:text-4xl text-2xl font-semi-bold mb-2 md:mb-6">{title}</h2>
              <p className="mt-2 text-lg md:text-2xl">{description}</p>
            </div>
          </a>
      </div>
    </div>
      
  );
}

export default PortfolioItems;
