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

// const Books = () => {
//   return (
//     <div className = 'books-container'>
//       <div className = 'books-component' style={{backgroundColor: "coral"}}>A</div>
//       <div className = 'books-component' style={{backgroundColor: "lightblue"}}>B</div>
//       <div className = 'books-component' style={{backgroundColor: "khaki"}}>C</div>
//       <div className = 'books-component' style={{backgroundColor: "pink"}}>D</div>
//       <div className = 'books-component' style={{backgroundColor: "lightgray"}}>E</div>
//       <div className = 'books-component' style={{backgroundColor: "lightgreen"}}>F</div>
//     </div>
//   )
// }

export default Books