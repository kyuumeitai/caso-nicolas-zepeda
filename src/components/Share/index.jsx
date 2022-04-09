import React from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from 'react-share'

import twittericon from '@/images/icon-twitter.svg'
import facebookicon from '@/images/icon-facebook.svg'
import whatsappicon from '@/images/icon-whatsapp.svg'
import redditicon from '@/images/icon-reddit.svg'

const BorderRed = styled.span`
  display: block;
  margin: 10px auto;
  width: 0;
  border-left: 1px solid #b10925;
  height: 24px;
`

const Share = ({ url, title, twitterhandle, hashtags }) => {
  if (!url || !title) {
    return null
  }

  const suffix = medium => {
    return `?utm_source=sharer&utm_medium=${medium}`
  }

  return (
    <div className="p-8 mx-auto">
      <p className="text-xs">Compartir</p>

      <BorderRed />

      <div className="flex items-center justify-center mx-auto">
        <FacebookShareButton
          url={`${url}${suffix('facebook')}`}
          quote={title}
          className="flex items-center justify-center w-8 h-8">
          <img src={facebookicon} alt="" />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${url}${suffix('twitter')}`}
          title={title}
          via={twitterhandle}
          hashtags={hashtags}
          className="flex items-center justify-center w-8 h-8 rounded-full">
          <img src={twittericon} alt="" />
        </TwitterShareButton>
        <WhatsappShareButton
          url={`${url}${suffix('whatsapp')}`}
          title={title}
          separator={' '}
          className="flex items-center justify-center w-8 h-8 rounded-full">
          <img src={whatsappicon} alt="" />
        </WhatsappShareButton>
        <RedditShareButton
          url={`${url}${suffix('whatsapp')}`}
          title={title}
          separator={' '}
          className="flex items-center justify-center w-8 h-8 rounded-full">
          <img src={redditicon} alt="" />
        </RedditShareButton>
      </div>
    </div>
  )
}

export default Share
