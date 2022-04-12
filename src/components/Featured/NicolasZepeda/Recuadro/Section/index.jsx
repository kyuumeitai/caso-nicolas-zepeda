import React from 'react'
import styled from 'styled-components'
import { setActive } from '@/contexts/Modal'
import PlayerButton from '@/components/Featured/NicolasZepeda/Player/PlayerButton'

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
}) => {
  const mockEpisode = {
    title: 'Episodio 1: Mándenme los audios',
    enclosure: {
      url: 'https://rudo.video/redirector/mp3/b3d423c1f63f263984435ca24792109b.mp3',
    },
  }

  return (
    <Wrap>
      <div className="container h-16 px-2 mx-auto sm:px-4 lg:px-20">
        <h2 className="mb-2">
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
