import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navigation.css'

const categories = [
  {
    name: 'React',
    slug: 'react'
  },

  {
    name: 'Books',
    slug: 'books'
  }
]

const Navigation = () => {
  return (
    <div className = 'Navigation'>
      <div className = 'Navigation-sub'>
        <div className = 'Navigation-third'>
          <Link to = '/'>
            <span className = 'Navigation-link'>
              Mark Engellson Blog
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
          {/* {categories.map((category) => (
            <Link to = {`/category/${category.slug}`} key = {category.slug}>
              <span className = 'Navigation-categories-link'>
                {category.name}
              </span>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default Navigation