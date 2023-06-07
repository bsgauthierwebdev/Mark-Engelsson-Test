import React from 'react'
import { useQuery, gql } from '@apollo/client'
import '../Styles/Press.css'

const GET_PRESS = gql`
  query GetPressDetails {
    presses {
      name
      organization
      quote
    }
  }
`

const Press = () => {
  const {loading, error, data} = useQuery(GET_PRESS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  
  console.log(data)

  return data.presses.map((
    {
      quote,
      name,
      organization,
    }
  ) => (
    <div className = 'Press'>
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

export default Press