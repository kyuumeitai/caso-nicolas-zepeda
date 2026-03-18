import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

import twittericon from '@/images/icon-twitter.svg'
import facebookicon from '@/images/icon-facebook.svg'
import whatsappicon from '@/images/icon-whatsapp.svg'

const Share = ({ url, title, twitterhandle, hashtags }) => {
  if (!url || !title) {
    return null
  }

  const suffix = medium => {
    return `?utm_source=sharer&utm_medium=${medium}`
  }

  return (
    <div className="flex items-center justify-end text-black">
      <span className="text-xs text-black uppercase">Comparte:</span>
      <div className="flex items-center justify-end mx-auto">
        <FacebookShareButton
          url={`${url}${suffix('facebook')}`}
          quote={title}
          className="flex items-center justify-center w-8 h-8 text-black">
          <img src={facebookicon} alt="" />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${url}${suffix('twitter')}`}
          title={title}
          via={twitterhandle}
          hashtags={hashtags}
          className="flex items-center justify-center w-8 h-8 text-black rounded-full">
          <img src={twittericon} alt="" />
        </TwitterShareButton>
        <WhatsappShareButton
          url={`${url}${suffix('whatsapp')}`}
          title={title}
          separator={' '}
          className="flex items-center justify-center w-8 h-8 text-black rounded-full">
          <img src={whatsappicon} alt="" />
        </WhatsappShareButton>
      </div>
    </div>
  )
}

export default Share
