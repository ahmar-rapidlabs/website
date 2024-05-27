import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Main from './components/main'
import Footer from './components/footer'
import Service from './components/pages/Service'
import ServicesPage from './components/pages/ServicesPage'
import ContactPage from './components/pages/contact'
import CommingSoon from './components/pages/CommingSoon'
import PortfolioItems from './components/pages/portfolio/PortfolioItems'
import PortfolioProps from './components/pages/portfolio/PortfolioProps'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {path: '', element: <><Nav /><Main /></>},
    {path: '/services', element: <><Nav/><Service/><Footer /></>},
    {path: '/services/:category', element: <><Nav/><ServicesPage/><Footer /></>},
    {path: '/contact', element: <><Nav/><ContactPage /><Footer /></>},
    // {path: '/portfolio', element: <><Nav/><CommingSoon /><Footer /></>},
    {path: '/aboutus', element: <><Nav/><CommingSoon /><Footer /></>},
    {path: '/blog', element: <><Nav/><CommingSoon /><Footer /></>},
    {path: '/portfolio', element: <><Nav/><PortfolioProps /><Footer /></>},

  ])
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />

    
    </>
  )
}

export default App
