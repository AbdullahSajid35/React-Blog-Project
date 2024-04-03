import React from 'react'
import MainAllBlogs from './MainAllBlogs'
import BlogList from './BlogList'

function AllBlogs() {
  return (
    <div className='mx-32 '>
      <MainAllBlogs/>
      <BlogList/>
    </div>
  )
}

export default AllBlogs