import React from 'react'
import { useQuery, gql, } from '@apollo/client'
import { useParams } from 'react-router-dom'

// const GET_POST_DETAIL = gql`
//   query GetPostDetails($slug : String!) {
//     post(where: {slug: "test-post"}) {
//       author {
//         bio
//         id
//         name
//         photo {
//           url
//         }
//       }
//       createdAt
//       slug
//       title
//       featuredImage {
//         url
//       }
//     }
//   }
// `

// const GET_POST_DETAIL = gql`
//   query GetPostDetails {
//     post(where: {slug: "$slug"}) {
//       author {
//         bio
//         id
//         name
//         photo {
//           url
//         }
//       }
//       createdAt
//       slug
//       title
//       featuredImage {
//         url
//       }
//     }
//   }
// `

// const PostDetail = ({slug}) => {
//   const {loading, error, data} = useQuery(GET_POST_DETAIL, {
//     variables: {slug}
//   })
//   if (loading) return <p>Loading...</p>
//   if (error) console.log(error)
//   console.log(data)
//   return (
//     <div>
//       <p>testing</p>
//       <h2>{data.post.title}</h2>
//       {/* <img src={data.post.featuredImage.url} alt={data.post.title} /> */}
//     </div>
//   )
// }

// export default PostDetail

const GET_POST_DETAIL = gql`
  query GetPostDetail($slug: String!) {
    post(where: {slug: $slug}) {
      author {
        name
        photo {
          url
        }
      }
      content {
        raw
      }
      createdAt
      id
      slug
      title
    }
  }
`

const PostDetail = () => {
  const {slug} = useParams()
  const {loading, error, data} = useQuery(GET_POST_DETAIL, {
    variables: {slug}
  })

  if (loading) return <h2>Loading...</h2>
  if (error) console.log(error)

  console.log(data)

  return (
    <div>
      <h1>Post Detail</h1>
      <h2>{data.post.title}</h2>
      <p>{data.post.author.name}</p>
      <p>{data.post.createdAt}</p>
    </div>
  )
}

export default PostDetail