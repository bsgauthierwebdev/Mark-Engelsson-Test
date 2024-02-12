import React from 'react'
import { Link } from 'react-router-dom'
import headshot from '../Images/headshot.jpeg'
import headshot2 from '../Images/headshot2.png'
import headshot3 from '../Images/headshot2-removebg-preview.png'
import cover from '../Images/wiwimimcover.jpg'
import '../Styles/Landing.css'

const Landing = () => {
  return (
    <div className = 'Landing'>
      <div className = 'Landing-intro'>
        <div className = 'Landing-intro-name'>
            <p>Hey everyone!</p>
            <p>I'm Mark, </p>
            <p>welcome to my world.</p>
        </div>
        <div className = 'Landing-intro-image'>
          <img src = {headshot3} alt = 'headshot' />
        </div>
      </div>
      <div className = 'Landing-minibio'>
        <div className = 'minibio-cover'>
          <Link to = 'https://www.amazon.co.uk/What-If-Whats-Inside-Isnt-ebook/dp/B0BST82LXY/' target = '_blank'>
            <img 
              src = {headshot}
              alt = 'book'
            />
          </Link>
        </div>
        <div className = 'minibio-description'>
          <div className = 'minibio-description-quote'>
            <p>
              Make yourself at home. You can learn about my journey, check out my books, and see some nice things people said about what I've written. I’ll also update the Press page when I’m going to events, so you can say hi! There’s also a blog with various pieces of my writing, musings and advice for fellow creatives, so keep an eye out there.
            </p>
            <p>
              If you want to drop me a line, hit the contact page (not too hard, please). To stay ahead of the curve with exciting announcements (plus exclusive access to discounts and sneak peeks at fresh writing/works in progress), sign up for my newsletter! I also put links to the blog posts in the newsletter, so don't miss out on the fun.
            </p>
          </div>
          {/* <div className = 'minibio-description-source'>
            <p>- Amazon</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Landing 