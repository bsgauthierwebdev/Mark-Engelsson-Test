import React from 'react'
import { useQuery, gql, } from '@apollo/client'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import '../Styles/PostDetail.css'

const GET_POST_DETAIL = gql`
  query GetPostDetail($slug: String!) {
    post(where: {slug: $slug}) {
      author {
        name
        photo {
          url
        }
      }
      content {
        raw
      }
      createdAt
      id
      slug
      title
    }
  }
`

const PostDetail = () => {
  const {slug} = useParams()
  const {loading, error, data} = useQuery(GET_POST_DETAIL, {
    variables: {slug}
  })

  if (loading) return <h2>Loading...</h2>
  if (error) console.log(error)

  console.log(data)

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key = {index}>{text}</b>)
      }
      if (obj.italic) {
        modifiedText = (<em key = {index}>{text}</em>)
      }
      if (obj.underline) {
        modifiedText = (<u key = {index}>{text}</u>)
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="heading-three">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="paragraph">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="heading-four">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  }

  return (
    <div className = 'PostDetail'>
      <div className = 'PostDetail-container'>
        <h1 className = 'PostDetail-title'>
          {data.post.title}
        </h1>
        <div className = 'PostDetail-container-two'>
          <div className = 'PostDetail-date'>
            <svg xmlns="http://www.w3.org/2000/svg" className="PostDetail-date-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>
              {moment(data.post.createdAt).format('DD MMM, YYYY')}
            </span>
          </div>
        </div>
        {console.log(data.post.content.raw)}
        {data.post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail