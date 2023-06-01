import React from 'react'
import {Categories, PostCard, PostWidget} from '../Components'
import '../Styles/Blog.scss'

const Blog = () => {
  return (
    <div className = 'Blog'>
      <h1>BLOG</h1>
      <div className = 'Blog-content'>
        <div className = 'Blog-posts'>
          <PostCard />
        </div>
        {/* <div className = 'Blog-recent'>
          <div className = 'Blog-recent-content'>
            <PostWidget />
            <Categories />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Blog