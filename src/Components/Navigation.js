import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navigation.scss'

const Navigation = () => {
  return (
    <div className = 'Navigation'>
      <div className = 'Navigation-sub'>
        <div className = 'Navigation-third'>
          <Link to = '/'>
            <span className = 'Navigation-link'>
              Mark Engelsson
            </span>
          </Link>
        </div>
        <div className = 'Navigation-categories'>
          <span className = 'Navigation-categories-link'>
            <Link to = '/about'>About</Link>
            <Link to = '/books'>Books</Link>
            <Link to = '/press'>Press</Link>
            <Link to = '/contact'>Contact</Link>
            <Link to = '/blog'>Blog</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navigation