import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';
import Service from './components/pages/Service';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/contact';
// import CommingSoon from './components/pages/CommingSoon';
import Pixee from './components/pages/Blogs/pixee'
import PortfolioProps from './components/pages/portfolio/PortfolioProps';
import BlogCategory from './components/pages/Blogs/BlogCategory';
import AboutUs from './components/pages/aboutus/AboutUs';
import Blog from './components/pages/Blogs/Blog';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:category" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog/devSecOps" element={<Blog />} /> */}
        <Route path="/blog/:category/:id" element={<Pixee />} />
        <Route path="/blog/:category" element={<Blog/>} />
        <Route path="/portfolio" element={<PortfolioProps />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
