import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import PricingRoute from './components/PricingRoute'
import AllBlogs from './components/AllBlogs'
import Blog from './components/Blog'
import AboutUs from './components/AboutUs'
import PageNotFound from './components/PageNotFound'
function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<PricingRoute/>} />
        <Route path='all-blogs' element={<AllBlogs/>}/>
        <Route path='blog' element={<Blog/>} />
        <Route path='about-us' element={<AboutUs/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )
}

export default App
