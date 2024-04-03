import React from 'react'
import step1 from '../assets/step1.jpg'
import step2 from '../assets/step2.jpg'
import step3 from '../assets/step3.jpg'
function ThreeCards() {
  return (
    <div className='bg-green-300 p-8'>
        <h1 className=' font-bold text-[40px]'>Create a website in three easy steps</h1>
        <p className='text-xl mt-3'>Build something awesome for your business, your portfolio or yourself.</p>
        <ul className='flex items-center  flex-wrap justify-center gap-1 pt-10 pb-7'>
            <li className=' flex items-center w-[300px] flex-col gap-4'>
                <img className='w-[220px]' src={step1} alt="step1" />
                <h1 className='font-bold text-xl'>1. Choose a Profession</h1>
                <p className='text-[20px]'>Select the purpose of your website and give us an idea of what you like</p>
            </li>
            <li className=' w-[300px] flex items-center flex-col gap-4'>
                <img className='w-[220px]' src={step2} alt="step2" />
                <h1 className='font-bold text-xl'>2.Webme builds your site</h1>
                <p className='text-[20px] text-wrap'>We will design your website based on your needs and fill it alreay with content</p>
            </li>
            <li className=' flex w-[300px] items-center flex-col gap-4'>
                <img className='w-[220px]' src={step3} alt="step3" />
                <h1 className='font-bold text-xl'>3. Publish your site</h1>
                <p className='text-[20px]'>All set? Hit publish and your site will be online on your own domain</p>
            </li>
        </ul>
    </div>
  )
}

export default ThreeCards