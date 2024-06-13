import React, { useState } from 'react';
import ContactStep2 from './contactStep2';
import axios from 'axios';

function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    selectedCategories: [],
    additionalCategories: [],
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'isCheckedAI' || name === 'isCheckedDataAnalysis' || name === 'isCheckedFullStack' || name === 'isCheckedOther') {
      const updatedCategories = checked
        ? [...formData.selectedCategories, value]
        : formData.selectedCategories.filter(category => category !== value);
      setFormData(prevData => ({
        ...prevData,
        selectedCategories: updatedCategories,
      }));
    } else if (name === 'analyticsRoadmaps' || name === 'dataMining' || name === 'predictivemodel' || name === 'webscrapping' || name === 'other' || name === 'GenerativeAI' || name === 'ComputerVision' || name === 'AIChatbot' || name === 'timeseries' || name === 'other' || name === 'customwebsites' || name === 'CloudApplications' || name === 'APIDevelopment' || name === 'uiuxdev' || name === 'ltTenk' || name === 'ten-tf' || name === 'tf-hund' || name === 'morethanhundred' || name === 'one-to-three' || name === 'three-to-six' || name === 'six-to-oneyr' || name === 'more-oneyr') {
      const updatedAdditionalCategories = checked
        ? [...formData.additionalCategories, value]
        : formData.additionalCategories.filter(category => category !== value);
      setFormData(prevData => ({
        ...prevData,
        additionalCategories: updatedAdditionalCategories,
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const [errors, setErrors] = useState({});
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleNext = () => {
    let validationErrors = {};

    if (step === 1) {
      if (!formData.companyName) {
        validationErrors.companyName = "Company name is required";
      }
      if (!formData.email) {
        validationErrors.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        validationErrors.email = "Invalid email format";
      }
      if (formData.selectedCategories.length === 0) {
        validationErrors.selectedCategories = "At least one category must be selected";
      }
    } else if (step === 2) {
      if (formData.additionalCategories.length === 0) {
        validationErrors.additionalCategories = "At least one category must be selected";
      }
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/send-email/', formData);
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    // alert("Information Submitted. We will contact you soon!")
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="text-sm mb-10 font-medium text-center text-gray-500 dark:text-gray-400">
        {/* Step indicators */}
        <ul className="flex flex-wrap justify-between">
          <li className={step >= 1 ? 'basis-1/3 px-2' : 'basis-1/3 px-2 opacity-50'}>
            <button className={`inline-block p-4 w-full border-b-4 ${step >= 1 ? 'border-indigo-600' : 'border-gray-300'} hover:text-gray-600 dark:hover:text-gray-300`} onClick={() => setStep(1)} disabled>Step 1</button>
          </li>
          <li className={step >= 2 ? 'px-2 basis-1/3' : 'basis-1/3 px-2 opacity-50'}>
            <button className={`inline-block w-full p-4 border-b-4 ${step >= 2 ? 'border-indigo-600' : 'border-gray-300'} hover:text-gray-600 dark:hover:text-gray-300`} onClick={() => setStep(2)} disabled>Step 2</button>
          </li>
          <li className={step >= 3 ? 'px-2 basis-1/3' : 'basis-1/3 px-2 opacity-50'}>
            <button className={`inline-block w-full p-4 border-b-4 ${step >= 3 ? 'border-indigo-600' : 'border-gray-300'} hover:text-gray-600 dark:hover:text-gray-300`} onClick={() => setStep(3)} disabled>Step 3</button>
          </li>
        </ul>
      </div>


      <div className='text-white'>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div className='flex justify-around flex-wrap'>
                <div className="CN basis-full md:basis-1/3 mb-5 md:mb-0 px-5 md:px-0">
                  <label htmlFor="CN-input" className="block mb-2 text-sm md:text-xl font-medium text-white">Company’s Name*</label>
                  <input
                    className='border border-gray-300 bg-transparent text-white text-sm md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-2.5'
                    type="text"
                    id='CN-input'
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                  />
                  {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                </div>
                <div className="BE basis-full md:basis-1/3 px-5 md:px-0">
                  <label htmlFor="BE-input" className="block mb-2 text-sm md:text-xl font-medium text-white">Business Email Address*</label>
                  <input
                    className='border border-gray-300 bg-transparent text-white text-sm md:text-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-2.5'
                    type="email"
                    id='BE-input'
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Business Email"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>

              <div className="select-cat-tec-main md:ml-32 mt-7 px-5 md:px-0">
                <div className="title">
                  <h5 className='text-white text-sm md:text-md uppercase'>Select One or more</h5>
                </div>
                <div className="select-tect-categ flex flex-wrap gap-4 mt-3">
                  <div className="tect-categ-1">
                    <input 
                      type="checkbox"
                      name='isCheckedAI' 
                      id="ai-option" 
                      value="Artificial Intelligence / Machine Learning" 
                      className="hidden peer" 
                      checked={formData.selectedCategories.includes('Artificial Intelligence / Machine Learning')}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="ai-option" className="bg-zinc-600 inline-flex items-center justify-between w-full py-5 px-9 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600 hover:bg-indigo-900">
                      <div className="block">
                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Artificial Intelligence / Machine Learning</div>
                      </div>
                    </label>
                  </div>
                  <div className="tect-categ-2">
                    <input 
                      type="checkbox" 
                      id="data-analysis-option" 
                      name='isCheckedDataAnalysis'
                      value="Data Analysis"
                      className="hidden peer" 
                      checked={formData.selectedCategories.includes('Data Analysis')}
                      onChange={handleChange}
                      required

                    />
                    <label htmlFor="data-analysis-option" className="bg-zinc-600 inline-flex items-center justify-between w-full py-5 px-9 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600 hover:bg-indigo-900">                           
                      <div className="block">
                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Data Analysis</div>
                      </div>
                    </label>
                  </div>
                  <div className="tect-categ-3">
                    <input 
                      type="checkbox" 
                      id="full-stack-option" 
                      name='isCheckedFullStack'
                      value="Full Stack Development" 
                      className="hidden peer" 
                      checked={formData.selectedCategories.includes('Full Stack Development')}
                      onChange={handleChange}
                      required
                      
                    />
                    <label htmlFor="full-stack-option" className="bg-zinc-600 inline-flex items-center justify-between w-full py-5 px-9 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600 hover:bg-indigo-900">                           
                      <div className="block">
                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Full Stack Development</div>
                      </div>
                    </label>
                  </div>
                  <div className="tect-categ-4">
                    <input 
                      type="checkbox" 
                      id="other-option" 
                      name='isCheckedOther'
                      value="other"
                      className="hidden peer" 
                      checked={formData.selectedCategories.includes('other')}
                      onChange={handleChange}
                      required

                    />
                    <label htmlFor="other-option" className="bg-zinc-600 inline-flex items-center justify-between w-full py-5 px-9 text-white rounded-xl cursor-pointer peer-checked:bg-indigo-600 hover:bg-indigo-900">                           
                      <div className="block">
                        <div className="w-full text-sm text-nowrap md:text-md font-normal">Other</div>
                      </div>
                    </label>
                  </div>
                </div>
                {errors.selectedCategories && <p className="text-red-500 text-sm mt-2">{errors.selectedCategories}</p>}

              </div>

              <div className="nextBtn flex justify-center px-10 md:px-0 md:justify-end md:mr-20 mt-14">
                <button
                  // disabled={!formData.selectedCategories.length}
                  onClick={handleNext}
                  className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-4 text-xl px-16 rounded"
                > Next 
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <div>
              <ContactStep2 
                selectedCategories={formData.selectedCategories} 
                additionalCategories={formData.additionalCategories}
                handleChange={handleChange} 
              />
              {errors.additionalCategories && <p className="text-red-500 text-sm mt-2 text-center">{errors.additionalCategories}</p>}
              <div className="next_prev_btn flex justify-between md:gap-0 gap-3 mt-14 px-4 md:px-0 md:mx-20">
                <button onClick={handlePrevious} className="md:w-auto w-full bg-indigo-600 hover:bg-indigo-800 text-white text-lg font-semibold py-4 md:py-2 px-16 md:px-10 rounded">
                  Previous
                </button>
                <button
                  disabled={!formData.selectedCategories.length}
                  onClick={handleNext}
                  className="bg-indigo-600 md:w-auto w-full hover:bg-indigo-800 text-white font-semibold py-4 text-lg px-16 rounded"
                > Next 
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <>
              <div className='md:mx-28 mx-10'>
                <div className="chatarea">
                  <label htmlFor="message" className="block mb-4 text-3xl text-white">Your message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="10" 
                    className="block bg-transparent p-2.5 w-full text-lg text-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Leave a comment..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="prev-submit-mobileview flex md:block justify-between">
                    <button onClick={handlePrevious} className="md:w-auto mt-4 md:mt-6 bg-indigo-600 hover:bg-indigo-800 text-white text-lg font-semibold md:py-4 md:px-10 px-6 p-2.5 md:rounded rounded-md">
                      Previous
                    </button>
                    <div className="submit-btn flex justify-center">
                      <button type="submit" className="md:w-2/4 w-full mt-4 h-12 px-6 text-white transition-colors font-semibold duration-150 text-lg bg-indigo-600 rounded-md focus:shadow-outline hover:bg-indigo-800">Submit</button>
                    </div>
                </div>

              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default ContactPage;
