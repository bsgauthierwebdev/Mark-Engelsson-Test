import React from 'react'
import { useQuery, gql } from "@apollo/client"

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
      author 
    }) => (
    <div>
      <h3>{title}</h3>
      <p>{createdAt}</p>
      <p>{excerpt}</p>
      <p>{author.name}</p>
      <p>{author.bio}</p>
    </div>
  ))
}

const Blog = () => {
  return (
    <div>
      <h1>BLOG</h1>
      <DisplayPosts />
    </div>
  )
}

export default Blog




// import React, {useState, useEffect} from 'react'
// import {Categories, PostCard, PostWidget, Layout} from '../Components'
// import '../Styles/Blog.css'

// const posts = [
//   {
//     title: 'Blog Testing Post',
//     excerpt: "I'm testing out the Blog page setup",
//   },

//   {
//     title: 'Second Test Post',
//     excerpt: "I'm testing out the Blog page setup yet again",
//   }
// ]

// const Blog = () => {
//   return (
//     <div className = 'Blog'>
//       <Layout>
//         <h1>Blog</h1>
//         <div className = 'Blog-content'>
//           <div className = 'Blog-posts'>
//             {posts.map((post, index) => (
//               <PostCard post = {post} key = {post.title} />
//             ))}
//           </div>
//           <div className = 'Blog-recent'>
//               <div className = 'Blog-recent-content'>
//                 <PostWidget />
//                 <Categories />
//               </div>
//           </div>
//         </div>
//       </Layout>  
//     </div>
//   )
// }

// export default Blog