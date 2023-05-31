import React from 'react'
import { useQuery, gql } from '@apollo/client'
// import '../Styles/PostCard.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

const GET_POST_CARD = gql`
    query {
        posts {
          author {
            name
            photo {
              url
            }
          }  
          title
          createdAt
          id
          slug
          content {
            text
          }
          featuredImage {
              url
          }
        }
    }
`

const PostCard = () => {
  const { loading, error, data } = useQuery(GET_POST_CARD)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return data.posts.map((
    {
      author,
      title,
      createdAt,
      id,
      slug,
      content,
      featuredImage
    }) => (
    <div className = 'PostCard'>
      <div className = 'PostCard-img-box'>
        <img
          className = 'PostCard-img-content'
          src = {featuredImage.url}
          alt = {title}
          key = {id}
        />
      </div>
      <h1 className = 'PostCard-title'>
        <Link to = {`/blog/posts/${slug}`}>
          {title}
        </Link>
      </h1>
      <div className = 'PostCard-author'>
        <div className = 'PostCard-author-info'>
          <img
            alt = {author.name}
            className = 'PostCard-author-image'
            src = {author.photo.url}
          />
          <p className = 'PostCard-author-name'>
            {author.name}
          </p>
        </div>
        <div className = 'PostCard-date'>
          <svg xmlns="http://www.w3.org/2000/svg" className="PostCard-date-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>
            {moment(createdAt).format('DD MMM, YYYY')}
          </span>
        </div>
      </div>
      <p className = 'PostCard-excerpt'>
        {content.text.slice(0, 500)}...
      </p>
      <div className = 'PostCard-link'>
        <Link to = {`/blog/posts/${slug}`}>
          <span className = 'PostCard-link-button'>
            Read More
          </span>
        </Link>
      </div>
    </div>
  ))
}
export default PostCard