import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
function Header() {
    const [isWebFocus,setIsWebFocus] = useState(false)
    const [isGuideFocus,setIsGuideFocus] = useState(false)
    const showWebBox = ()=>{
        setIsWebFocus(true)
    }

    const hideWebBox=()=>{
        setIsWebFocus(false)
    }

    const showGuideBox=()=>{
        setIsGuideFocus(true)
    }

    const hideGuideBox=()=>{
        setIsGuideFocus(false)
    }



  return (
    <div className='flex w-full items-start justify-between px-24 bg-yellow-400 p-4'>
        <div className=' text-left'>
            <img src={logo} alt="logo" />
            <h1 className='font-bold text-2xl'>WEBME</h1>
        </div>
        <div className='flex gap-24 justify-between items-center '> 
                <ul className='flex flex-row gap-10 font-bold'>
                    <li className='cursor-pointer' onMouseOut={hideWebBox} onMouseEnter={showWebBox}>Websites
                        <div onMouseOver={showWebBox} className= {`text-left font-normal p-4 rounded-md shadow-2xl  fixed bg-white flex flex-col gap-3 ${isWebFocus ? 'block' : 'hidden'}`}>
                            <p>Create your Website</p>
                            <p>Some other Pages</p>
                            <p>Create Website now</p>
                        </div>
                    </li>
                    <li className='cursor-pointer' onMouseOut={hideGuideBox} onMouseEnter={showGuideBox}>Guide
                        <div onMouseOver={showGuideBox} className= {`text-left font-normal p-4 rounded-md shadow-2xl  fixed bg-white flex flex-col gap-3 ${isGuideFocus ? 'block' : 'hidden'}`}>
                                <p>How Can I</p>
                                <p>You future</p>
                                <p>Explore All</p>
                        </div>
                    </li>
                    <li><Link to='/'>Pricing</Link></li>
                    <li><Link to='/all-blogs'>AllBlogs</Link></li>
                    <li><Link to='blog' >Blog</Link></li>
                    <li><Link to='about-us' >FR</Link></li>
                </ul>
            <div  className='flex items-center gap-7  '>
                <h1  className='font-bold'>Login</h1>
                <button className='text-white bg-red-500 p-3 rounded-3xl'>Start for free</button>
            </div>
        </div>
    </div>
  )
}

export default Header