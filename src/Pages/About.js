import React from 'react'
import { useQuery, gql } from '@apollo/client'
import '../Styles/About.scss'

const GET_AUTHOR = gql`
  query AuthorInfo {
    authors {
      bio
      name
      photo {
        url
      }
    }
  }
`
const About = () => {
  const { loading, error, data } = useQuery(GET_AUTHOR)
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  console.log(data)

  return data.authors.map((
    {name, photo, bio}
  ) => (
    <div className = 'About'>
      <div className = 'About-container'>
        <div className = 'About-container-name'>
          {/* <h1>{name}</h1> */}
          <h1>About {name}</h1>
          <h2>The guy in the photo</h2>
          <h3>Behind the book</h3>
          <p>(He writes other stuff too, just you wait...)</p>
        </div>
        <div className = 'About-container-content'>
          <div className = 'About-container-photo'>
            <img src = {photo.url} alt = {name} />
          </div>
          <div className = 'About-container-bio'>
            {bio}
          </div>
        </div>
      </div>
    </div>
  ))
}

export default About