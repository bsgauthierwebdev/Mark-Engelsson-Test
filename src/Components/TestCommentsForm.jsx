import React, { useEffect, useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const ADD_COMMENT = gql`
    mutation CreateComment(
        $name: String!,
        $email: String!,
        $comment: String!,
    ) {
        createComment(
            name: $name,
            email: $email,
            comment: $comment,
        )
        {
            id
            name
            email
            comment
        }
    }
`

const TestCommentsForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [comment, setComment] = useState()

    const [addComment, {data, loading, error}] = useMutation(ADD_COMMENT, {
        variables: {name, email, comment}
    })

    return (
        <div>
            {/* {error ? <p>'Something went wrong</p> : null}
            {loading ? <p>Loading...</p> : null} */}
            
            <h1>TestCommentsForm</h1>

            <form
                onSubmit = {(e) => {
                    e.preventDefault();
                    addComment({variables: {
                        name: name, 
                        email: email, 
                        comment: comment
                    }})
                }}
            >
                <div>
                    <input 
                        type = 'text' 
                        id = 'name'
                        placeholder = 'Name'
                        value = {name}
                        onChange = {(e) => {setName(e.target.value)}}
                    />
                </div>
                <div>
                    <input 
                        type = 'text'
                        id = 'email'
                        placeholder = 'Email'
                        value = {email}
                        onChange = {(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <textarea 
                        id = 'comments'
                        placeholder = 'Comments'
                        value = {comment}
                        onChange = {(e) => {setComment(e.target.value)}}
                    />
                </div>
                <button type = 'submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default TestCommentsForm