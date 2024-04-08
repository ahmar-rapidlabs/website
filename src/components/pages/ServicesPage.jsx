import React from 'react';
import ServicePage from './ServicePage';
import ai from '../../assets/services/ai.png';
import { useParams } from 'react-router-dom';
import pyImg from '../../assets/icons/python.png';
import plotly from '../../assets/icons/plotly.png';
import powerBi from '../../assets/icons/powerbi.png';
import azure from '../../assets/icons/azure.png';
import tensorflow from '../../assets/icons/tensorflow.png';
import sagemaker from '../../assets/icons/sagemaker.png';
import openAi from '../../assets/icons/openai.png';
import d3 from '../../assets/icons/d3js.png';
import Tableau from '../../assets/icons/tableau.png';
import spss from '../../assets/icons/spss.png';
import aws from '../../assets/icons/aws.png';
import gcp from '../../assets/icons/gcp.png';
import dataAnalytics from '../../assets/services/da.png';
import django from '../../assets/icons/django.png';
import dashboard from '../../assets/icons/dashboard.png';
import devops from '../../assets/icons/devops.png';
import bootstrap from '../../assets/icons/bootstrap.png';
import flutter from '../../assets/icons/flutter.png';
import java from '../../assets/icons/java.png';
import mean from '../../assets/icons/mean.png';
import mern from '../../assets/icons/mern.png';
import vercel from '../../assets/icons/vercel.png';
import tailwind from '../../assets/icons/tailwind.png';
import react from '../../assets/icons/react.png';
import awss from '../../assets/icons/awss.png';
import fullstack from '../../assets/services/fullstack.png';
import cto from '../../assets/services/cto.png';

function ServicesPage() {
    let { category } = useParams();
    let page = null;

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
            technologies={{
                'Python': {pyImg},
                'Microsoft Azure AI': {azure},
                'SageMaker': {sagemaker},
                'TensorFlow': {tensorflow},
                'Open AI': {openAi},
             }}
            image={ai}
        />;
    } else if (category === 'da') {
        page = <ServicePage
            title="Data analytics"
            description="Unlock the power of your data with our cutting-edge Data Analytics services, transforming insights into actionable strategies for unparalleled growth."
            serviceslist={{
                'Data Collection and Management': "Streamlining data gathering and organization to empower AI-driven insights and decision-making.",
                'Data Processing and Cleaning': "Data Processing and Cleaning involves transforming raw data into a structured format and removing inaccuracies to ensure it's ready for analysis and decision-making.",
                'Data Analysis': "Data Analysis transforms raw data into actionable insights, empowering businesses to make informed decisions and drive growth.",
                'Data Visualization': "Data visualization transforms complex data sets into clear, engaging graphical representations, making insights more accessible and actionable.",
                'Machine Learning and Predictive Analytics': "Machine Learning and Predictive Analytics leverages advanced algorithms to analyze historical data, enabling businesses to anticipate future trends and make informed decisions.",
            }}
            technologies={{
                'Python': {pyImg},
                'Plotly': {plotly},
                'D3.js': {d3},
                'Tableau': {Tableau},
                'SPSS': {spss},
                'AWS Analytics': {aws},
                'Google Cloud Analytics': {gcp},
             }}
            image={dataAnalytics}
        />;
    } else if (category === 'fullstack') {
        page = <ServicePage
            title="Full Stack Development"
            description="Unlock the full potential of your business with our bespoke Web and Mobile Development services, designed to create seamless, user-centric digital experiences that drive engagement and growth."
            serviceslist={{
                'Custom web portals': "Tailored AI-powered web portals crafted to streamline and enhance your digital presence and user experience.",
                'Cloud-based platforms': "Cloud-based platforms offer scalable, on-demand computing resources and AI tools over the internet, enabling businesses to deploy and manage applications without the need for local infrastructure.",
                'API Development': "API development involves creating customized interfaces that enable seamless integration and communication between your software applications and our AI solutions.",
                'Cross-platform App Development': "It leverages a single codebase to create apps that run seamlessly on multiple operating systems, ensuring broad accessibility and cost-efficiency.",
                'Progressive Web App Development': "Involves creating web applications that offer a seamless, high-performance user experience, similar to native apps, but accessible directly via a web browser without requiring installation.",
                'UI/UX Design for custom Apps': "Crafting intuitive and visually appealing user interfaces for bespoke applications, enhancing user experience through personalized AI-driven design solutions.",
            }}
            technologies={{
                'Django': {django},
                'Devops': {devops},
                'Mern Stack': {mern},
                'Mean Stack': {mean},
                'Vercel': {vercel},
                'Dashboard': {dashboard},
                'tailwind css': {tailwind},
                'AWS': {awss},
                'Bootstrap': {bootstrap},
                'Java': {java},
                'Flutter': {flutter},
                'React Native': {react},
                'Azure': {azure},
             }}
            image={fullstack}
        />;
    } else if (category === 'cto') {
        page = <ServicePage
            title="CTO Consultancy"
            description="Unlock the full potential of your business with our bespoke Web and Mobile Development services, designed to create seamless, user-centric digital experiences that drive engagement and growth."
            serviceslist={{
                'Technology Strategy Development': "Crafting tailored technology strategies to optimize business processes and maximize ROI through AI integration and innovation.",
                'AI Architecture Design': "Involves crafting the foundational structure and strategic blueprint of AI systems to optimize performance, scalability, and integration with existing technologies.",
                'Proof of Concept (POC)': "A Proof of Concept (POC) demonstrates the feasibility and potential of our AI solutions tailored to your specific business needs.",
                'Data Strategy and Management': "Data Strategy and Management: Crafting tailored approaches to optimize data utilization and organization for enhanced AI-driven insights and decision-making.",
                'Integration with Existing Systems': "Seamlessly incorporate our AI solutions into your current infrastructure for enhanced efficiency and performance.",
                'Security and Compliance': "Ensuring peace of mind through AI-driven security measures and regulatory compliance solutions tailored to safeguard your business assets.",
            }}
            image={cto}
        />;
    }

    return (
        <>
            <div className="servicepage text-white">
                {page}
            </div>
        </>
    );
}

export default ServicesPage;
