import React from 'react'
import build1 from '../assets/build1.jpg'
import build2 from '../assets/build2.jpg'
function GrowFaster() {
  return (
    <div className='px-8 py-24 flex  flex-col gap-3'>
        <div className='flex justify-center align-middle flex-wrap gap-3 items-center '>
            <div className='w-[500px] text-left'>
                <h1 className='font-bold text-5xl'>Build fast. Grow faster. Load fastest.</h1>
                <p>Create your website in minutes and grow it easy with your business. Impress your customers and improve your SEO ranking with amazing fast loading times</p>
                <a><u><p className='font-bold text-red-600'>Get Your Business Now</p></u></a>
            </div>
            <div className='w-[500px]'>
                <img className='w-[700px]' src={build1} alt="build1" />
            </div>
        </div>
        <div className='flex justify-center flex-wrap align-middle gap-3 items-center '>
            <div className='w-[500px]'>
                <img className='w-[700px]' src={build2} alt="build2" />   
            </div>
            <div className='w-[500px] text-left'>
                <h1 className='font-bold text-5xl'>Customer support. Ready 24/7.</h1>
                <p>Stuck? Not for long. Our support team is there to help and our knowledge center gives you insights and howtos.</p>
                <a><u><p className='font-bold text-red-600'>Get Started Now</p></u></a>
            </div>
        </div>
    </div>
  )
}

export default GrowFaster
















