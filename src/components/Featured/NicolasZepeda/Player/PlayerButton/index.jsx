import React from 'react'
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

const TranscriptionButton = styled.button`
  appearance: none;
  cursor: pointer;
`

const formatLength = (length) => {
  if (!length) return '4 min'
  const [min, sec] = length.split(':').map(Number)
  const total = Math.round(min + sec / 60)
  return `${total < 1 ? 1 : total} min`
}

const PlayerButton = ({ episode, transcription, which, length }) => {
  const {
    setEpisode,
    setIsPlaying,
    activeEpisode,
    setActiveEpisode,
    globalPause,
    setGlobalPause,
  } = usePlayer()

  const handlePlay = () => {
    setIsPlaying(true)
    setEpisode(episode)
    setActiveEpisode(which)
  }

  const { setActive, setContent, setTitle } = useModal()

  const { title } = episode

  const titleFormatter = `Transcripción: <strong>${title}</strong>`

  const handleTranscriptionClick = () => {
    if (transcription) {
      setContent(transcription)
      setTitle(titleFormatter)
      setActive(true)
    }
  }

  const handlePause = () => {
    setGlobalPause(true)
  }

  return (
    <Wrap>
      <PlayButton
        type="button"
        onClick={() => {
          if (which === activeEpisode && !globalPause) {
            handlePause()
          } else {
            handlePlay()
          }
        }}>
        {which === activeEpisode && !globalPause ? <Pause /> : <Play />}
      </PlayButton>
      <div>
        <ListenButton type="button" onClick={() => handlePlay()}>
          {which !== activeEpisode && (
            <span className="font-bold hover:underline">Escuchar</span>
          )}
          <span className="text-xs text-gray-800 "> {formatLength(length)} </span>{' '}
        </ListenButton>
        <span className="text-xs text-gray-600"> |</span>{' '}
        {transcription && (
          <TranscriptionButton
            type="button"
            className="text-xs text-gray-800 hover:underline"
            onClick={() => handleTranscriptionClick()}>
            Transcripción
          </TranscriptionButton>
        )}
      </div>
    </Wrap>
  )
}

export default PlayerButton
