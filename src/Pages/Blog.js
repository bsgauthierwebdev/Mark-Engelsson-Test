import React from 'react'
import { useQuery, gql } from "@apollo/client"
import {Categories, PostCard, PostWidget, Layout} from '../Components'
import '../Styles/Blog.css'

const GET_POSTS = gql`
    query {
        posts {
            author {
                bio
                name
                id
                photo {
                    url
                }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
                url
            }
            categories {
                name
                slug
            }
        }
    }
`

function DisplayPosts() {
  const {loading, error, data} = useQuery(GET_POSTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return data.posts.map((
    {
      title,
      createdAt,
      excerpt,
      author,
    }) => (
    <div>
      <h3>Title: {title}</h3>
      <p>Written: {createdAt}</p>
      <p>Preview: {excerpt}</p>
      <p>Written by: {author.name}</p>
      <p>About the author: {author.bio}</p>
    </div>
  ))
}

const Blog = () => {
  return (
    <div className = 'Blog'>
      <Layout>
        <h1>BLOG</h1>
        <div className = 'Blog-content'>
          <div className = 'Blog-posts'>
            <DisplayPosts />
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

