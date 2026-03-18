import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PlayerButton from '@/components/Featured/NicolasZepeda/Player/PlayerButton'
import cover from '@/images/habitacion-106-podcast-lt-small.jpg'

import { remark } from 'remark'
import remarkHtml from 'remark-html'
import Images from './Images'

const Wrap = styled.div`
  text-align: left;
  position: relative;
  .firstcol {
    position: sticky;
    top: 20%;
    /* border: 1px solid tomato; */
    @media (max-width: 768px) {
      top: 80px;
    }
  }
  h2 {
    font-size: 3.75rem;
    line-height: 0.8;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }
`

const UberWrap = styled.div`
  /* border: 1px solid #0f0; */
  min-height: 130vh;
  margin-bottom: 30vh;
  display: grid;

  grid-template-columns: 40% 1fr;
  position: relative;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ImageWrap = styled.div`
  min-height: 100vh;
  /* border: 1px solid #f0f; */
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    min-height: 0;
  }
`

const NewPill = styled.span`
  display: inline-block;
  background-color: tomato;
  color: white;
  font-family: sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 999px;
  margin-bottom: 6px;
`

const Section = ({
  title,
  description,
  prefix,
  coordinates,
  script,
  episode,
  audio,
  audiointro,
  chapindex,
  length,
  imageOverride,
  isNew,
}) => {
  const [parsedHtml, setParsedHtml] = useState(null)

  const mockEpisode = {
    title: `${prefix}: ${title}`,
    podcastTitle: `Habitación 106: El juicio de Nicolás Zepeda`,
    enclosure: {
      url: `${audio ? audio : null}`,
      img: cover,
    },
  }

  useEffect(() => {
    let cancelled = false

    if (script) {
      remark()
        .use(remarkHtml)
        .process(script)
        .then(file => {
          if (!cancelled) {
            setParsedHtml(String(file))
          }
        })
        .catch(error => {
          console.error('Error parsing chapter transcript', error)
        })
    }

    return () => {
      cancelled = true
    }
  }, [script])

  return (
    <UberWrap>
      <Wrap>
        <div className="container px-2 mx-auto firstcol sm:px-4 lg:px-20">
          <h2 className="mb-4 font-actaDisplay text-balance">
            {isNew && <NewPill>Nuevo</NewPill>}
            <small className="block font-sans text-base font-bold tracking-wide ">
              {prefix}
            </small>
            {title}
          </h2>
          <div
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: description }}></div>
          {audio && (
            <div>
              <PlayerButton
                which={chapindex}
                episode={mockEpisode}
                transcription={parsedHtml}
                length={length}
              />
            </div>
          )}
        </div>
      </Wrap>
      <ImageWrap>
        <Images which={imageOverride || chapindex} />
      </ImageWrap>
    </UberWrap>
  )
}

export default Section
