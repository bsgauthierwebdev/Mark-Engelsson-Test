import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navigation.css'

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div>
        <nav className = 'navigation'>
            <Link to = '/' className = 'name'>
                Mark Engelsson
            </Link>

            <button 
                className = 'hamburger'
                onClick = {() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <svg
                    xmlns = 'http://www/w3/org/2000/svg'
                    className = 'h-5 w-5'
                    viewBox = '0 0 20 20'
                    fill = 'white'    
                >
                    <path 
                        fillRule = 'evenodd'
                        d = 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                        clipRule = 'evenodd'
                    />
                </svg>
            </button>
            <div 
                className = {
                    isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
                }
            >
                <ul>
                    <li>
                        <Link 
                            to = '/about'
                            onClick = {() => setIsNavExpanded(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                    <Link 
                            to = '/books'
                            onClick = {() => setIsNavExpanded(false)}
                        >
                            Books
                        </Link>
                    </li>
                    <li>
                    <Link 
                            to = '/press'
                            onClick = {() => setIsNavExpanded(false)}
                        >
                            Press
                        </Link>
                    </li>
                    <li>
                    <Link 
                            to = '/contact'
                            onClick = {() => setIsNavExpanded(false)}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to = '/blog'
                            onClick = {() => setIsNavExpanded(false)}
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navigation 