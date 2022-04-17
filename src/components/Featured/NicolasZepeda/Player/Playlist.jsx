import React from 'react'
import { usePlayer } from '@/contexts/Player'
import styled from 'styled-components'
import cover from '@/images/habitacion-106-podcast-lt.jpg'

const StPlaylist = styled.div``

const Playlist = () => {
  const { episodes, showPlaylist } = usePlayer()
  if (!episodes || !episodes.length) return null
  return (
    <StPlaylist className={showPlaylist ? ' active' : ''}>
      <div>Capítulos</div>
      <div>
        {episodes.map((episode, index) => (
          <Episode key={index} episode={episode} />
        ))}
      </div>
    </StPlaylist>
  )
}

const Episode = ({ episode }) => {
  const { audio, length, prefix, title, description } = episode
  const { setEpisode, setShowPlaylist } = usePlayer()

  const handleClick = () => {
    const mockEpisode = {
      title: `${prefix}: ${title}`,
      podcastTitle: `Habitación 106: El juicio de Nicolás Zepeda`,
      enclosure: {
        url: `${audio ? audio : null}`,
        img: cover,
        length: length,
      },
    }

    setEpisode(mockEpisode)
    setShowPlaylist(false)
  }
  return (
    <button onClick={() => handleClick()}>
      {prefix} - {title}
    </button>
  )
}

export default Playlist
