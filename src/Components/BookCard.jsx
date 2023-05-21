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
  const { loading, error, data } = useQuery(GET_BOOK_CARD)
  if (loading) return <p>Loading...</p>
  if (error) console.log(error)

  console.log(data)

  return data.books.map((
    {
        title,
        description,
        purchaseLink,
        cover
    }
  ) => (
    <div className = 'BookCard'>
      <div className = 'BookCard-container'>
        <div className = 'BookCard-card'>
          <div className = 'BookCard-card-layout'>
            <div className = 'BookCard-card-layout-title'>
              <h3>{title}</h3>
            </div>
            <div className = 'BookCard-card-layout-image'>
              <img 
                src = {cover.url}
                alt = {title}
                style = {{height: 280}}
              />
            </div>
            <div className = 'BookCard-card-layout-description'>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
}

export default BookCard