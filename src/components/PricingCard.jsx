import React from 'react'
import tick from '../assets/tick.svg'
function PricingCard() {
  return (
    <div className='p-12'>
        <h1 className='text-center font-bold text-5xl'>Choose your website builder plan</h1>
        <ul className='flex justify-evenly text-left  pt-10 '>
            <li className='flex gap-4 p-6 w-[30%] shadow-2xl flex-col items-start'>
                <h1 className='font-bold text-4xl'>Business</h1>
                <p className='text-wrap w-[50%] text-gray-800'>Full performance for professional growth</p>
                <h1 className='font-bold text-4xl'>$ 9.99/mo</h1>
                <p className='text-gray-600'>VAT may apply</p>
                <button className='bg-black w-[80%] text-white p-3 rounded-3xl'>Select Now</button>
                <ul>
                  <li className='flex gap-5'><img src={tick} alt="" />Your own Domain <a  className='text-blue-600' href=""><u> included</u></a></li>
                  <li className='flex gap-5'><img src={tick} alt="" />Ads free</li>
                  <li className='flex gap-5'><img src={tick} alt="" /> Unlimited Subpages & Bandwidth</li>
                  <li className='flex gap-5'><img src={tick} alt="" /> Email Forwarding</li>
                </ul>
            </li>
            <li className='flex gap-4 p-6  w-[30%] shadow-2xl flex-col items-start'>
                <h1 className='font-bold text-4xl'>Starter</h1>
                <p className='text-wrap w-[50%] text-gray-800'>Full performance for professional growth</p>
                <h1 className='font-bold text-4xl'>$ 9.99/mo</h1>
                <p className='text-gray-600'>VAT may apply</p>
                <button className='bg-black w-[80%] text-white p-3 rounded-3xl'>Select Now</button>
                <ul>
                <li className='flex gap-5'><img src={tick} alt="" />Your own Domain </li>
                  <li className='flex gap-5'><img src={tick} alt="" />Email Forwarding</li>
                  <li className='flex gap-5'><img src={tick} alt="" /> Ads free</li>
                </ul>
            </li>
            <li className='flex gap-4 p-6  w-[30%] shadow-2xl flex-col items-start'>
                <h1 className='font-bold text-4xl'>Private</h1>
                <p className='text-wrap w-[50%] text-gray-800'>For private use</p>
                <h1 className='font-bold text-4xl'>€7,90 /mo</h1>
                <p className='text-gray-600'>VAT may apply</p>
                <button className='bg-black w-[80%] text-white p-3 rounded-3xl'>Select Now</button>
                <ul>
                <li className='flex gap-5'><img src={tick} alt="" />webmesites.com address</li>
                  <li className='flex gap-5'><img src={tick} alt="" />Without ads</li>
                  <li className='flex gap-5'><img src={tick} alt="" /> SSL encrypted</li>
                </ul>
            </li>
        </ul>
        <div className='p-8 font-bold'> 
          <h1>+ See All Features</h1>
        </div>
    </div>
  )
}

export default PricingCard