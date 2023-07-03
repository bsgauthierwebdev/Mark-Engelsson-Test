import React from 'react'
import PressCard from '../Components/PressCard'
import '../Styles/Press.css'

const Press = () => {
  return (
    <div className = 'Press'>
      <div className = 'Press-header'>
        <div className = 'Press-subheader'>
          <h1>Press</h1>  
        </div>
      </div>
      <div className = 'Press-cards'>
        <PressCard />
      </div>
    </div>
  )
}

export default Press