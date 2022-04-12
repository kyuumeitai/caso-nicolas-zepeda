import React from 'react'
import styled from 'styled-components'
import { setActive } from '@/contexts/Modal'
import PlayerButton from '@/components/Featured/NicolasZepeda/Player/PlayerButton'
import cover from '@/images/habitacion-106-podcast-lt.jpg'

const Wrap = styled.div`
  max-width: 40%;
  text-align: left;
  min-height: 90vh;
  display: flex;
  align-items: center;
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
  const mockEpisode = {
    title: `${prefix}: ${title}`,
    podcastTitle: `Habitación 109: El juicio de Nicolás Zepeda`,
    enclosure: {
      url: `${audio ? audio : null}`,
      img: cover,
    },
  }

  return (
    <Wrap>
      <div className="container h-16 px-2 mx-auto sm:px-4 lg:px-20">
        <h2 className="mb-4 text-6xl leading-none font-actaDisplay ">
          <small className="block font-sans text-base font-bold tracking-wide ">
            {prefix}
          </small>
          {title}
        </h2>
        <div
          className="mb-2"
          dangerouslySetInnerHTML={{ __html: description }}></div>
        <PlayerButton episode={mockEpisode} />
      </div>
    </Wrap>
  )
}

export default Section
