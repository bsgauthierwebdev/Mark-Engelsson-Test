import React from 'react'
import BookCard from '../Components/BookCard'
import '../Styles/Books.css'
import GoToTop from '../Components/GoToTop'

const Books = () => {
  return (
    <div className = 'Books'>
      <header className = 'Books-header'>
        <h1>Books</h1>
      </header>
      <div className = 'Books-cards'>
        <BookCard />
      </div>
      <GoToTop />
    </div>
  )
}
export default Books