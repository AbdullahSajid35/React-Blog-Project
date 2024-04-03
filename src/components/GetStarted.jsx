import React from 'react'
import facial_img from '../assets/facial.webp'
import f1 from '../assets/f_1.svg'
import f2 from '../assets/f_2.svg'
import f3 from '../assets/f_3.svg'
function GetStarted() {
  return (
    <div className='bg-yellow-400 px-4 py-10 '> 
        <div className='flex gap-6 justify-evenly  px-24 items-start'>
            <div className='gap-6 text-left flex flex-col items-start'>
                <h1 className='text-5xl font-bold'>Create your own Website in minutes</h1>
                <h1 className='font-bold text-3xl'>In a few easy steps online</h1>
                <button className='text-white bg-red-500 px-6 py-3 rounded-3xl'>Get Started</button>
            </div>
            <div > 
            <img src={facial_img} alt="facial" />
            </div>
        </div>
        <ul className='flex justify-evenly font-bold text-xl text-left'>
            <li className='flex gap-3'>
                <img  className='bg-slate-300 px-2 py-3 w-[50px] rounded-md' src={f1} alt="First" />
                <h1>11 Million<br/> Customers</h1>
            </li>
            <li className='flex gap-3'>
                <img className='bg-slate-300 px-2 py-3 w-[50px] rounded-md' src={f2} alt="Second" />
                <h1>24/7 Customer<br/> Support</h1>
            </li>
            <li className='flex gap-3'>
                <img className='bg-slate-300 px-2 py-3 w-[50px] rounded-md' src={f3} alt="Third" />
                <h1>14-days Money <br/> Back Guarantee</h1>
            </li>
        </ul>
    </div>
  )
}

export default GetStarted