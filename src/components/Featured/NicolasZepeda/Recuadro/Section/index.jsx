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
          <PlayerButton episode={mockEpisode} />
        </div>
      </div>
    </Wrap>
  )
}

export default Section
