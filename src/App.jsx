import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Main from './components/main'
import Footer from './components/footer'
import Service from './components/pages/Service'
import ServicesPage from './components/ServicesPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {path: '', element: <><Nav /><Main /></>},
    {path: '/services', element: <><Nav/><Service/><Footer /></>},
    {path: '/services/:category', element: <><Nav/><ServicesPage/><Footer /></>},

  ])
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />

    
    </>
  )
}

export default App
