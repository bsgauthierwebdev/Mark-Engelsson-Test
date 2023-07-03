import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from'react-router-dom'
import '../Styles/BookCard.css'

const GET_BOOK_CARD = gql`
  query GetBooks {
    books {
        title
        description
        purchaseLink
        cover {
            url
        }
    }
  }
`

const BookCard = () => {
  const {loading, error, data} = useQuery(GET_BOOK_CARD)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return data.books.map((
    {title, description, purchaseLink, cover}
  ) => (
    <div className = 'BookCard'>
      <Link to = {purchaseLink} target = '_blank' className = 'BookCard-title'>{title}</Link>
      {/* <header className = 'BookCard-title'>{title}</header> */}
      <div className = 'BookCard-content'>
        <div className = 'BookCard-image'>
          <img 
            src = {cover.url}
            alt = {title}
            key = {title}
          />
        </div>
        <div className = 'BookCard-description'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  ))
}

export default BookCard