import { useQuery, gql } from "@apollo/client"

const GET_POST_CARD = gql`
  query GetPostCard {
    posts {
      featuredImage 
      title
    }
  }
`

export default function PostCard()  {
  const { loading, error, data } = useQuery(GET_POST_CARD)
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return data.posts.map(
    ({title, featuredImage}) => (
      <div className = 'PostCard'>
        <div className = 'PostCard-img-box'>
          <img 
            src = {featuredImage.url} 
            alt = {title}
            className = 'PostCard-img-content'
          />
        </div>
      </div>
    )
  )
}