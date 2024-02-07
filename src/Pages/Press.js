import React from 'react'
import PressCard from '../Components/PressCard'
import press from '../Images/press.png'
import pressNoBackground from '../Images/press-removebg-preview.png'
import '../Styles/Press.css'

const Press = () => {
  return (
    <div className = 'Press'>
      <div className = 'Press-header'>
        <div className = 'Press-subheader'>
          <h1>Press</h1>  
        </div>
      </div>
      <div className="Press-images">
        <div className="Press-image">
          <img src = {press} alt = 'Speaking' />
        </div>
      </div>
      <div className = 'Press-cards'>
        <PressCard />
      </div>
      <div className="Press-images">
        <div className="press-image-no-background">
          <img src = {pressNoBackground} alt = 'Speaking'/>
        </div>
      </div>
    </div>
  )
}

export default Press