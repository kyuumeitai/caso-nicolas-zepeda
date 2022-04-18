import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PlayerButton from '@/components/Featured/NicolasZepeda/Player/PlayerButton'
import cover from '@/images/habitacion-106-podcast-lt.jpg'
import { remark } from 'remark'
import recommended from 'remark-preset-lint-recommended'
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
    if (script) {
      remark()
        .use(recommended)
        .use(remarkHtml)
        .process(script, (err, file) => {
          if (err) {
            console.log('err en remark', err)
          } else {
            const transhtml = file.value
            setParsedHtml(transhtml)
          }
        })
    }
  }, [script])

  return (
    <UberWrap>
      <Wrap>
        <div className="container px-2 mx-auto firstcol sm:px-4 lg:px-20">
          <h2 className="mb-4 font-actaDisplay ">
            <small className="block font-sans text-base font-bold tracking-wide ">
              {prefix}
            </small>
            {title}
          </h2>
          <div
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: description }}></div>
          <div>
            <PlayerButton episode={mockEpisode} transcription={parsedHtml} />
          </div>
        </div>
      </Wrap>
      <ImageWrap>
        <Images which={chapindex + 1} />
      </ImageWrap>
    </UberWrap>
  )
}

export default Section
