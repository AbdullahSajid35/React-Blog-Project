import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <div className='flex flex-wrap text-left justify-center gap-16 bg-black  text-white py-36'>
        <div className='flex flex-col gap-8'>
            <h1 className='font-bold text-2xl'>About Us</h1>
            <ul className='flex flex-col gap-7'>
                <li>Home</li>
                <li>About</li>
                <li>Privacy</li>
            </ul>
        </div>
        <div className='flex flex-col gap-8'>
            <h1 className='font-bold text-2xl'>Review</h1>
            <ul className='flex flex-col gap-7'>
                <li>All Blogs</li>
                <li>Blogs</li>
            </ul>
        </div>
        <div className='flex flex-col gap-8'>
            <h1 className='font-bold text-2xl'>Sign Up today</h1>
            <ul className='flex flex-col gap-7'>
                <li>News</li>
                <li>Team</li>
            </ul>
        </div>
        <div className='flex flex-col gap-7'>
            <div className='flex justify-center gap-8'>
                <FontAwesomeIcon className='text-[40px] '  icon={faFacebook}/>
                <FontAwesomeIcon  className='text-[30px] bg-white text-black rounded-full p-1' icon={faTwitter}/>
                <FontAwesomeIcon  className='text-[30px] bg-white text-black rounded-full p-1 ' icon={faInstagram}/>
            </div>
            <h1><a>info@webme.com</a></h1>
            <h1>202-460-9955</h1>
            <h1>©2024 Webme. All rights reserved</h1>
        </div>
    </div>
  )
}

export default Footer