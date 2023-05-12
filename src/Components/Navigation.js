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
          {categories.map((category) => (
            <Link to = {`/category/${category.slug}`} key = {category.slug}>
              <span className = 'Navigation-categories-link'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigation