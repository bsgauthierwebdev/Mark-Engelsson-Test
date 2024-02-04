import React from 'react'
import BookCard from '../Components/BookCard'
import '../Styles/Books.css'

const Books = () => {
  return (
    <div className = 'Books'>
      <header className = 'Books-header'>
        <h1>Books</h1>
      </header>
      <div className = 'Books-cards'>
        <BookCard />
      </div>
    </div>
  )
}
export default Books