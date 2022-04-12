import React, { useState } from 'react'
import styled from 'styled-components'
import { Play, Pause } from '../Buttons'
import { usePlayer } from '@/contexts/Player'

const PlayButton = styled.button`
  appearance: none;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
`

const PlayerButton = ({ episode }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { setEpisode } = usePlayer()

  const handlePlay = () => {
    setIsPlaying(true)
    setEpisode(episode)
  }

  return (
    <PlayButton onClick={() => handlePlay()}>
      {isPlaying ? <Pause /> : <Play />}
    </PlayButton>
  )
}

export default PlayerButton
