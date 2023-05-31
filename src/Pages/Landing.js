import React from 'react'
import { useQuery, gql } from '@apollo/client'
import '../Styles/Landing.scss'

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

const Landing = () => {
  return (
    <div className = 'Landing'>
        <header className = 'Landing-header'><h2>TITLE title TITLE</h2></header>
        <div className = 'Landing-content'>
          <div className = 'Landing-content-image'>
            <img 
              src = 'https://pbs.twimg.com/media/CvxPO66XEAAhTLX.jpg:large' 
              
            />
          </div>
          <div className = 'Landing-content-text'>
            <p>This is where all of the text will be placed</p>
          </div>
        </div>
    </div>
  )
}

export default Landing