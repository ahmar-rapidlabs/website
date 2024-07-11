import React from "react";
import { useState, useEffect } from "react";
import BlogCategories from './BlogCategory'
import PixeeBanner from '../../../assets/Blog/pixee.jpg'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Blog() {
    const { category } = useParams();
    const [isChecked, setIsChecked] = useState(false);
    console.log(category);
    useEffect(() => {
        if (category === 'devSecOps') {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [category]);
  return (
    <>
      <div className="blog_main_container text-white">
        <div className="max-w-screen-xl mx-auto ">
          <div className="tite text-center py-12 ">
            <h3 className="text-5xl">Categories</h3>
          </div>
          <div className="blog_category_ticket flex justify-center">
            <div className="blog_categories">
            <div className="DevSecOps_category_ticket">
      <Link to="/blog/devSecOps">
        <input
          type="checkbox"
          id="DevSecOpsCategory"
          name="isCheckedDevSecOps"
          value=""
          className="hidden peer"
          checked={isChecked}
          readOnly
        />
        <label
          htmlFor="DevSecOpsCategory"
          className={`${
            isChecked ? 'bg-indigo-600' : 'bg-zinc-600'
          } inline-flex items-center justify-between py-5 px-9 text-white rounded-xl cursor-pointer`}
        >
          <div className="block">
            <div className="w-full text-sm text-nowrap md:text-md font-normal">
              DevSecOps (1)
            </div>
          </div>
        </label>
      </Link>
    </div>
            </div>
          </div>
        </div>
        <div className="blog_categories_cards max-w-screen-2xl mx-auto mt-24">
            <BlogCategories title="Enhance Code Securty with Pixee.ai" description="We delve into the integration of Pixe.ai and SonarCloud within two active GitHub projects: CRM and Cardio Chatbot. Pixe.ai, a robust DevSecOps tool, ensures seamless security and compliance checks, while SonarCloud provides comprehensive code quality analysis. By combining these tools, we achieved a streamlined development workflow that enhances both security and code integrity. The article covers the setup process, configuration steps, and the benefits of leveraging these tools together. Additionally, ..." img={PixeeBanner} category='DevSecOps' />
        </div>
      </div>
    </>
  );
}

export default Blog;
