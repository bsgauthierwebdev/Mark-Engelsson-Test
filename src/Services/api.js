// Any file inside the folder services/api is mapped to /api/ and will be treated as an API endpoint instead of a page

import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";

const graphqlAPI = process.env.REACT_APP_GRAPHQL_URI

export default async function comments (req, res) {
    const {name, email, slug, comment} = req.body
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        }
    })

    const query = gql`
        mutation CreateComment(
            $name: String!, $email: String!, $comment: String!, $slug: String!) {
            createComment(data: 
                {
                    name: $name, 
                    email: $email, 
                    comment: $comment, 
                    post: {
                        connect: {slug: $slug}
                    }
                }
            )
            {id}
        }
    `

    const result = await graphQLClient.request(
        query, req.body
    )

    return res.status(200).send(result)
}