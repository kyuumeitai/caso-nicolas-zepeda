import React, { useState } from 'react'
import styled from 'styled-components'
import { InfoIcon, CommentIcon } from '@primer/octicons-react'

const Conclusion = ({ data }) => {
  const { statement, conclusion } = data
  const { title, content } = conclusion
  console.log('conclusion', conclusion)

  return (
    <div>
      <small>{statement}</small>
      <h3>{title}</h3>
      <Looper contents={content} />
    </div>
  )
}

const Box = ({ item }) => {
  console.log('content inside box', item)
  const { statement, content, description, quote } = item

  const [opened, setOpened] = useState(false)
  const [quoteOpened, setQuoteOpened] = useState(false)

  const addBlankToString = str => {
    return str.replace(/\n/g, '<br />')
  }

  const handleToggle = () => {
    setOpened(!opened)
    setQuoteOpened(!quoteOpened)
  }

  return (
    <div className="px-10 py-6 border border-black">
      {statement && (
        <div
          onClick={() => handleToggle()}
          className={`flex items-center justify-center ${
            description || quote ? 'cursor-pointer' : ''
          }`}>
          <h4
            className="mr-2 text-xl"
            dangerouslySetInnerHTML={{ __html: statement }}></h4>
          {description && <InfoIcon size={16} />}
          {quote && <CommentIcon size={16} />}
        </div>
      )}
      {description && opened && (
        <p
          className="text-sm description"
          dangerouslySetInnerHTML={{
            __html: addBlankToString(description),
          }}></p>
      )}
      {quote && quoteOpened && (
        <p
          className="text-sm quote"
          dangerouslySetInnerHTML={{ __html: addBlankToString(quote) }}></p>
      )}
      {content && content.length > 0 && (
        <>
          {content.map((item, index) => {
            return <ContentType key={index} item={item} />
          })}
        </>
      )}
    </div>
  )
}

const StText = styled.div`
  .inner {
    ul {
      padding-top: 10px;
      padding-bottom: 10px;
      max-width: 300px;
      text-align: left;
      margin: 0 auto;
      li {
        display: list-item;
        list-style-type: disc;
        list-style-position: outside;
      }
    }
  }
`

const Text = ({ item }) => {
  console.log('content inside text', item)
  const { statement, content } = item
  return (
    <StText>
      <div className="py-3 inner">
        <p dangerouslySetInnerHTML={{ __html: statement }}></p>
      </div>
      {content && content.length > 0 && (
        <>
          {content.map((item, index) => {
            return <ContentType key={index} item={item} />
          })}
        </>
      )}
    </StText>
  )
}

const Looper = ({ contents }) => {
  console.log('looper', contents)
  return (
    <>
      {contents.map((item, index) => {
        return <ContentType key={index} item={item} />
      })}
    </>
  )
}

const ContentType = ({ item }) => {
  console.log('contentType', item)
  if (item.type === 'group') {
    return <Looper contents={item.content} />
  }
  if (item.type === 'box') {
    return <Box item={item} />
  }
  if (item.type === 'text') {
    return <Text item={item} />
  }
  return null
}

export default Conclusion
