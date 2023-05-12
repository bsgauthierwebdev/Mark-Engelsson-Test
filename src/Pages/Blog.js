import React, {useState, useEffect} from 'react'
import {Categories, PostCard, PostWidget, Layout} from '../Components'
import '../Styles/Blog.css'

const posts = [
  {
    title: 'Blog Testing Post',
    excerpt: "I'm testing out the Blog page setup",
  },

  {
    title: 'Second Test Post',
    excerpt: "I'm testing out the Blog page setup yet again",
  }
]

const Blog = () => {
  return (
    <div className = 'Blog'>
      <Layout>
        <h1>Blog</h1>
        <div className = 'Blog-content'>
          <div className = 'Blog-posts'>
            {posts.map((post, index) => (
              <PostCard post = {post} key = {post.title} />
            ))}
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