import React from 'react'
import {PostCard} from '../Components'
import '../Styles/Blog.scss'
import GoToTop from '../Components/GoToTop'

const Blog = () => {
  return (
    <div className = 'Blog'>
      <GoToTop />
      <div className = 'Blog-header'>
        <h1>Blog</h1>
      </div>
      <div className = 'Blog-content'>
        <div className = 'Blog-posts'>
          <PostCard />
        </div>
      </div>
    </div>
  )
}

export default Blog