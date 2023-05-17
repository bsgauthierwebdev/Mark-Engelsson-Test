import { useQuery, gql } from "@apollo/client"
import { PostCard } from "../Components"

const GET_POSTS = gql`
    query {
        posts {
            author {
                bio
                name
                id
                photo {
                    url
                }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
                url
            }
            categories {
                name
                slug
            }
        }
    }
`

export default function DisplayPosts() {
  const {loading, error, data} = useQuery(GET_POSTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return data.posts.map((
    {
      title,
      createdAt,
      excerpt,
      author,
    }) => (
    <div>
      <h3>Title: {title}</h3>
      <p>Written: {createdAt}</p>
      <p>Preview: {excerpt}</p>
      <p>Written by: {author.name}</p>
      <p>About the author: {author.bio}</p>
    </div>
  ))
}