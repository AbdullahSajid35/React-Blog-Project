import React from 'react'
import f_icon from '../assets/f_icon.svg'
import i_icon from '../assets/i_icon.svg'
import t_icon from '../assets/t_icon.svg'
import mainAllBlog from '../assets/mainAllBlog.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import blogSmall from '../assets/blogimage2.jpg'
import BlogAccordion from './BlogAccordion'
import RedButton from './RedButton'
function BlogMain() {
  return (
    <div className='flex flex-col gap-12 py-12 items-start'>
        <h1 className='font-bold text-3xl '>Eine Vereinshomepage erstellen - diese 10 Inhalte müssen rein!</h1>
        <div className='flex flex-col justify-start gap-4'>
            <p className='font-bold text-left text-lg'>aus der Kategorie "<span className='text-blue-500'>Webdesign</span>"<br/>Schwierigkeitsgrad: Anfänger</p>
            <div className='flex'>
                <img className='bg-blue-700' src={f_icon} alt="" />
                <img className='bg-red-500' src={i_icon} alt="" />
                <img className='bg-blue-400' src={t_icon} alt="" />
            </div>
        </div>
        <div>
            <img src={mainAllBlog} alt="" />
        </div>
        <h1 className='font-bold text-4xl '>Vereinshomepage als zentrale Anlaufstelle</h1>

        <div className='flex text-left flex-col w-full gap-3 p-8 rounded-3xl bg-orange-200'>
            <h1 className='font-bold text-2xl'>How do I make my site mobile friendly?</h1>
            <p className='text-xl'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
            </p>
        </div>

        <p className='text-left text-xl'>Im Zeitalter des Internets ist es auch für Vereine nahezu unerlässlich, sich auf einer eigenen Homepage zu präsentieren. erstellenWas zunächst nach einem Mehraufwand klingt, birgt großartige Gelegenheiten: Über eine Vereinshomepage können neue Mitglieder geworben und bereits angemeldete Personen über alles Wichtige bezüglich des Vereins informiert werden.<br/><u>Kostenlose Homepage</u></p>
        <ul className='text-red-500 text-xl flex flex-col gap-3 p-5'>
            <li className='flex justify-start gap-5 items-center text-left'>
                <span className='px-3 py-1 rounded-full border border-red-500'>1</span>
                <p >Choose your website type</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <span className='px-3 py-1 rounded-full border border-red-500'>2</span>
                <p >Decide how you want to create your website</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <span className='px-3 py-1 rounded-full border border-red-500'>3</span>
                <p >Find a suitable domain</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <span className='px-3 py-1 rounded-full border border-red-500'>4</span>
                <p >Plan your own website</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <span className='px-3 py-1 rounded-full border border-red-500'>5</span>
                <p >Create important pages</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <span className='px-3 py-1 rounded-full border border-red-500'>6</span>
                <p >Design your site</p>
            </li>
        </ul>

        <RedButton/>
        <h1 className='font-bold text-4xl '>Vereinshomepage als zentrale Anlaufstelle</h1>

        <ul className='text-red-500 text-xl flex flex-col gap-3 p-5'>
            <li className='flex justify-start gap-5 items-center text-left'>
                <FontAwesomeIcon className='block text-red-500 text-[27px]' icon={faCircleCheck} />
                <p >Choose your website type</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <FontAwesomeIcon className='block text-red-500 text-[27px]' icon={faCircleCheck} />
                <p >Decide how you want to create your website</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <FontAwesomeIcon className='block text-red-500 text-[27px]' icon={faCircleCheck} /> 
                <p >Find a suitable domain</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <FontAwesomeIcon className='block text-red-500 text-[27px]' icon={faCircleCheck} />
                <p >Plan your own website</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <FontAwesomeIcon className='block text-red-500 text-[27px]' icon={faCircleCheck} />
                <p >Create important pages</p>
            </li>

            <li className='flex justify-start gap-5 items-center text-left'>
                <FontAwesomeIcon className='block text-red-500 text-[27px]' icon={faCircleCheck} /> 
                <p >Design your site</p>
            </li>
        </ul>
        <img src={blogSmall} className='w-full' alt="" />
        <BlogAccordion/>
        <div className='flex text-left flex-col  gap-3 p-8 rounded-3xl bg-yellow-400 w-[80%]'>
            <h1 className='font-bold text-2xl'>How do I make my site mobile friendly?</h1>
            <p className='text-xl'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
            </p>
        </div>
        <RedButton/>
    </div>
  )
}

export default BlogMain