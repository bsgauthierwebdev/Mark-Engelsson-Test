import React from 'react'
import { useQuery, gql } from '@apollo/client'
import BookCard from '../Components/BookCard'
import '../Styles/Books.scss'

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

const Books = () => {
  return (
    <div className = 'Books'>
      <header className = 'Books-header'>
        <h1>BOOKS</h1>
      </header>
      <div className = 'Books-cards'>
        <BookCard />
      </div>
    </div>
  )
}
export default Books