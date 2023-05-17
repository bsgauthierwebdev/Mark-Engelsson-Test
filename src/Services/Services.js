import { gql, useQuery } from "@apollo/client";

export const getPosts = async () => {
    const query = gql`
        query GetPosts {
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



    // export default function DisplayPosts() {
    //     const {loading, error, data} = useQuery(GET_POSTS)
      
    //     if (loading) return <p>Loading...</p>
    //     if (error) return <p>{error}</p>
      
    //     return data.posts
    //     console.log(result);

}

export default function DisplayPosts() {
    const {loading, error, data} = useQuery(getPosts)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    
    return data.posts
    console.log(data.posts);
}