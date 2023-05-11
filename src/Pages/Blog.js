import React from 'react'
import {Categories, PostCard, PostWidget} from '../Components'
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
    <div>
        <h1>Blog</h1>
        <div className = 'blog-posts'>
          <div className = 'blog-posts-content'>
            {posts.map((post, index) => (
              <PostCard post = {post} key = {post.title} />
            ))}
          </div>
          <div className = 'recent-posts'>
              <div className = 'recent-posts-content'>
                <PostWidget />
                <Categories />
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Blog