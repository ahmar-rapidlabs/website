import React from 'react';
import ServicePage from './pages/ServicePage';
import servpg_ai from '../assets/solutions/gen_ai.png';
import { useParams } from 'react-router-dom';

function ServicesPage() {
    let { category } = useParams();
    let page = null; // Define page variable outside the conditional statement

    if (category === 'ai') {
        page = <ServicePage
            title="Artificial intelligence/Machine learning"
            description="Empower your business with cutting-edge Artificial Intelligence and Machine Learning solutions designed to unlock innovative strategies, enhance operational efficiency, and drive intelligent decision-making. Transform your data into actionable insights and competitive advantages, tailoring the future of your industry."
            serviceslist={{
                'Custom AI solution development': "Tailor-made AI strategies and solutions crafted to meet your unique business challenges, driving innovation and efficiency through bespoke machine learning models, algorithms, and data-driven insights.",
                'Computer vision applications': "Tailor-made AI strategies and solutions crafted to meet your unique business challenges, driving innovation and efficiency through bespoke machine learning models, algorithms, and data-driven insights.",
                'Generative AI': "Tailor-made AI strategies and solutions crafted to meet your unique business challenges, driving innovation and efficiency through bespoke machine learning models, algorithms, and data-driven insights.",
                'Chatbots and virtual assistants': "Tailor-made AI strategies and solutions crafted to meet your unique business challenges, driving innovation and efficiency through bespoke machine learning models, algorithms, and data-driven insights.",
                'Natural Language Processing (NLP)': "Tailor-made AI strategies and solutions crafted to meet your unique business challenges, driving innovation and efficiency through bespoke machine learning models, algorithms, and data-driven insights.",
                'Recommendation systems': "Tailor-made AI strategies and solutions crafted to meet your unique business challenges, driving innovation and efficiency through bespoke machine learning models, algorithms, and data-driven insights.",
            }}
            technologies={["Python", "Plotly", "Microsoft Azure AI", "Power BI", "SageMaker", "TensorFlow", "Tableau", "Open AI"]}
            image={servpg_ai}
        />;
    }

    return (
        <>
        
            <p className='text-white'>{category}</p>
            <div className="servicepage text-white">
                {page}
            </div>
        </>
    );
}

export default ServicesPage;
