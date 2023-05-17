import React from 'react'
import { useQuery, gql } from '@apollo/client'
import '../Styles/PostCard.css'

const GET_POST_CARD = gql`
    query {
        posts {
            title
            id
            featuredImage {
                url
            }
        }
    }
`

const PostCard = () => {
  const { loading, error, data } = useQuery(GET_POST_CARD)
  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return data.posts.map((
    {
      title,
      id,
      featuredImage
    }) => (
    <div className = 'PostCard'>
      <div className = 'PostCard-img-box'>
        <h3>This is where the image will go</h3>
        <img
          className = 'PostCard-img-content'
          src = {featuredImage.url}
          alt = {title}
          key = {id}
        />
      </div>
    </div>
  ))
}
export default PostCard