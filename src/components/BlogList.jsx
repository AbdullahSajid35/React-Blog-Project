import React from 'react'
import Blogsmall from '../assets/Blogsmall.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
function BlogList() {
  return (
    <div className='py-7'>
        <div className='flex flex-wrap py-5 gap-4 text-left'>
        <div className='rounded-xl flex flex-col w-[320px] gap-8 pb-8 border border-gray-300 shadow-lg'>
            <img src={Blogsmall} alt="Blogsmall" />
            <div className='w-[80%] mx-auto text-left'>
                <p className='text-md text-gray-600'>27 minutes ago 12 min</p>
                <h1 className='text-xl font-bold'>21 Up-And-Coming Influencers You Should Follow in 2023</h1>
            </div>
        </div>

        <div className='rounded-xl flex flex-col w-[320px] gap-8 pb-8 border border-gray-300 shadow-lg'>
            <img src={Blogsmall} alt="Blogsmall" />
            <div className='w-[80%] mx-auto text-left'>
                <p className='text-md text-gray-600'>27 minutes ago 12 min</p>
                <h1 className='text-xl font-bold'>21 Up-And-Coming Influencers You Should Follow in 2023</h1>
            </div>
        </div>

        <div className='rounded-xl flex flex-col w-[320px] gap-8 pb-8 border border-gray-300 shadow-lg'>
            <img src={Blogsmall} alt="Blogsmall" />
            <div className='w-[80%] mx-auto text-left'>
                <p className='text-md text-gray-600'>27 minutes ago 12 min</p>
                <h1 className='text-xl font-bold'>21 Up-And-Coming Influencers You Should Follow in 2023</h1>
            </div>
        </div>

        <div className='rounded-xl flex flex-col w-[320px] gap-8 pb-8 border border-gray-300 shadow-lg'>
            <img src={Blogsmall} alt="Blogsmall" />
            <div className='w-[80%] mx-auto text-left'>
                <p className='text-md text-gray-600'>27 minutes ago 12 min</p>
                <h1 className='text-xl font-bold'>21 Up-And-Coming Influencers You Should Follow in 2023</h1>
            </div>
        </div>

        <div className='rounded-xl flex flex-col w-[320px] gap-8 pb-8 border border-gray-300 shadow-lg'>
            <img src={Blogsmall} alt="Blogsmall" />
            <div className='w-[80%] mx-auto text-left'>
                <p className='text-md text-gray-600'>27 minutes ago 12 min</p>
                <h1 className='text-xl font-bold'>21 Up-And-Coming Influencers You Should Follow in 2023</h1>
            </div>
        </div>

        <div className='rounded-xl flex flex-col w-[320px] gap-8 pb-8 border border-gray-300 shadow-lg'>
            <img src={Blogsmall} alt="Blogsmall" />
            <div className='w-[80%] mx-auto text-left'>
                <p className='text-md text-gray-600'>27 minutes ago 12 min</p>
                <h1 className='text-xl font-bold'>21 Up-And-Coming Influencers You Should Follow in 2023</h1>
            </div>
        </div>
        
    </div>

    <div className='flex justify-center gap-10 text-red-500 text-2xl font-bold'>
        <FontAwesomeIcon  icon={faAngleLeft}/>
        <FontAwesomeIcon icon={faAngleRight}/>
    </div>
    </div>
  )
}

export default BlogList