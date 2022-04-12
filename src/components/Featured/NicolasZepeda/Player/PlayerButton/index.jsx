import React, { useState } from 'react'
import styled from 'styled-components'
import { Play, Pause } from '../Buttons'
import { usePlayer } from '@/contexts/Player'
import { useModal } from '@/contexts/Modal'

const PlayButton = styled.button`
  appearance: none;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 40px;
  width: 46px;
  height: 46px;
`

const Wrap = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 44px 1fr;
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-gap: 0.75rem;
  }
`

const ListenButton = styled.button`
  appearance: none;
  cursor: pointer;
  text-align: left;
`

const PlayerButton = ({ episode }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { setEpisode } = usePlayer()

  const handlePlay = () => {
    setIsPlaying(true)
    setEpisode(episode)
  }

  const { setContentKey, setActive } = useModal()

  return (
    <Wrap>
      <PlayButton onClick={() => handlePlay()}>
        {isPlaying ? <Pause /> : <Play />}
      </PlayButton>
      <div>
        <ListenButton onClick={() => handlePlay()}>
          <span className="font-bold hover:underline">Escuchar</span>
          <span className="text-xs text-gray-800 "> 4 min </span>{' '}
        </ListenButton>
        <span className="text-gray-600 text-xs"> |</span>{' '}
        <span
          className="hover:underline text-xs text-gray-800"
          onClick={() => setActive(true)}>
          Transcripción
        </span>
      </div>
    </Wrap>
  )
}

export default PlayerButton
