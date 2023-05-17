import React from 'react'
import { getPosts } from '../Services/Services'
import { PostCard, PostWidget, Categories, Layout } from '../Components'

const TestBlog = ({posts}) => {
  return (
    <div className = 'Blog'>
      <Layout>
        <h1>BLOG</h1>
        <div className = 'Blog-content'>
          <div className = 'Blog-posts'>
            {/* {posts.map((post) => <PostCard post = {post} key = {post.title} />)} */}
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

export default TestBlog

export async function getStaticProps() {
    const posts = (await getPosts()) || []

    return {
        props: {
            posts
        }
    }
}