import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import '../Styles/About.scss'

const GET_AUTHOR_INFO = gql`
  query GetAboutInfo {
    author(where: {id: "clhdwm9122h1f0ajzwmnv7tlb"}) {
      bio {
        raw
      }
      name
      photo {
        url
      }
    }
  }
`

const About = () => {
  const {id} = useParams()
  const {loading, error, data} = useQuery(GET_AUTHOR_INFO, {
    variables: {id}
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Sorry, we could not complete that request</p>

  
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
    <div className = 'About'>
      <div className = 'About-container'>
        <div className = 'About-header'>
          <div className = 'About-subheader'>
            <h1>Biography</h1>
          </div>
        </div>
        <div className = 'About-bio'>
          {data.author.bio.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

            return getContentFragment(index, children, typeObj, typeObj.type)
          })}
        </div>
      </div>
      
    </div>
  )
}

export default About