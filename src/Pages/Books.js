import React from 'react'
import BookCard from '../Components/BookCard'
import '../Styles/Books.scss'

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