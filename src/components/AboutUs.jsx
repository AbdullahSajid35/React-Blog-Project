import React from 'react'
import aboutImg from '../assets/about.webp'
function AboutUs() {
  return (
    <div className='px-32 flex flex-col gap-10 py-12'>
      <h1 className=' ml-10 text-5xl text-left font-bold'>About us</h1>
      <img className='rounded-3xl' src={aboutImg} alt="About Image" />
    </div>
  )
}

export default AboutUs