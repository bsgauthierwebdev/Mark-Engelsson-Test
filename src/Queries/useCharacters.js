import { useQuery, gql } from "@apollo/client"

const GET_CHARACTERS = gql`
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

export const DisplayPosts = () => {
    const {error, loading, data} = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return data.posts.map(({title}) => (
        <div>
            <h3>{title}</h3>
        </div>
    ))
}