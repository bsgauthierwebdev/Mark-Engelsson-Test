import React from 'react'
import BookCard from '../Components/BookCard'
import '../Styles/Books.css'

const Books = () => {
  return (
    <div className = 'Books'>
      <h1>BOOKS</h1>
        <div className = 'Books-content'>
          <div className = 'Books-content-container'>
            <BookCard />
          </div>
        </div>
    </div>
  )
}

export default Books