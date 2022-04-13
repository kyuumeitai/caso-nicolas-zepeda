import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PlayerButton from '@/components/Featured/NicolasZepeda/Player/PlayerButton'
import cover from '@/images/habitacion-106-podcast-lt.jpg'
import { remark } from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'

const Wrap = styled.div`
  max-width: 40%;
  text-align: left;
  min-height: 90vh;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    max-width: 100%;
  }
  h2 {
    font-size: 3.75rem;
    line-height: 0.8;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
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

  //function for add extra line breaks to string

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
    <Wrap>
      <div className="container h-16 px-2 mx-auto sm:px-4 lg:px-20">
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
  )
}

export default Section
