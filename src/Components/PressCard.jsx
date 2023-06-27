import React from 'react'
import { useQuery, gql } from '@apollo/client'
import '../Styles/PressCard.css'

const GET_PRESS = gql`
  query GetPressDetails {
    presses {
      name
      organization
      quote
    }
  }
`

const PressCard = () => {
    const {loading, error, data} = useQuery(GET_PRESS)
  
    if (loading) return <p>Loading...</p>
    if (error) return <p>Sorry, we could not complete that request</p>
    
  
    return data.presses.map((
      {
        quote,
        name,
        organization,
      }
    ) => (
      <div className = 'PressCard'>
        <div className = 'text-bubble'>
          {quote}
        </div>
        <div className = 'contributor'>
          <p>{name}</p>
          <p>{organization}</p>
        </div>
      </div>
    ))
  
  }

  export default PressCard