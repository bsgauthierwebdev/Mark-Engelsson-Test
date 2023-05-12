import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
    query GetPosts {
        postsConnection {
            edges {
                node {
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
        }
    }
`

export const usePosts = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    return {
        error, loading, data
    }
}