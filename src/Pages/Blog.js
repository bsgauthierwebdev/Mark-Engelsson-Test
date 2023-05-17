import React from 'react'
import {Categories, PostCard, PostWidget, Layout} from '../Components'
import DisplayPosts from '../Queries/DisplayPosts'
import '../Styles/Blog.css'

const Blog = () => {
  return (
    <div className = 'Blog'>
      <Layout>
        <h1>BLOG</h1>
        <div className = 'Blog-content'>
          <div className = 'Blog-posts'>
            <PostCard />
            {/* <DisplayPosts /> */}
          </div>
          <div className = 'Blog-recent'>
            <div className = 'Blog-recent-content'>
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Blog

