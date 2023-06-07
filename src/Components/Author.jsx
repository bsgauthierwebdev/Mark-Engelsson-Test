import React from 'react'
import { useQuery, gql, } from '@apollo/client'
import { useParams } from 'react-router-dom'
import '../Styles/Author.scss'

const GET_AUTHOR_DETAIL = gql`
  query GetAuthorDetail($slug: String!) {
    post(where: {slug: $slug}) {
      author {
        name
        photo {
          url
        }
      }
      slug
    }
  }
`

const Author = () => {
  const {slug} = useParams()
  const {loading, error, data} = useQuery(GET_AUTHOR_DETAIL, {
    variables: {slug}
  })

  if (loading) return <h2>Loading...</h2>
  if (error) console.log(error)

  console.log(data)

  return (
    <div className = 'Author'>
        <div className = 'Author-info'>
          <img 
            alt = {data.post.author.name}
            src = {data.post.author.photo.url}
            className = 'Author-info-image'
          />
          <h3 className = 'Author-info-text'>
            {data.post.author.name}
          </h3>
        </div>
    </div>
  )
}

export default Author