import React from 'react'
import mainAllBlog from '../assets/mainAllBlog.jpg'
function MainAllBlogs() {
  return (
    <div className='flex flex-col gap-12 my-12'>
        <h1 className='font-bold text-5xl'>How to Start a Blog and Monetize it in 2023</h1>
        <img src={mainAllBlog} alt="mainAllBlog" />
        <div className='w-[90%] py-4 border-b border-gray-300 flex flex-col gap-16'>
        <p className='text-xl text-justify '>Im Zeitalter des Internets ist es auch für Vereine nahezu unerlässlich, sich auf einer eigenen Homepage zu präsentieren. Was zunächst nach einem Mehraufwand klingt, birgt großartige Gelegenheiten: Über eine Vereinshomepage können neue Mitglieder geworben und bereits angemeldete Personen über alles Wichtige bezüglich des Vereins informiert werden. Kostenlose Homepage erstellen.</p>
            <div className='flex justify-between w-full'>
                <p className='text-xl'>27 minutes ago 12 min</p>
                <button className='bg-red-500 duration-300 hover:bg-red-600 text-white py-4 px-16 rounded-full'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default MainAllBlogs