import React from 'react'
import { usePlayer } from '@/contexts/Player'
import styled from 'styled-components'
import cover from '@/images/habitacion-106-podcast-lt.jpg'

const StPlaylist = styled.div`
  &.playlist-active {
    border: 1px solid #0f0;
  }
  &.playlist-hidden {
  }
  background-color: rgba(255, 255, 255, 0.1);
`

const StEpisode = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  appearance: none;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  border: 1px 0;
  cursor: pointer;
  outline: none;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .tracklist-mask {
    overflow: hidden;
    .tracklist-info {
      font-size: 11px;
    }
  }
  .tracklist-icon {
    margin-right: 7px;
    width: 8px;
    height: 8px;
    border: 1px solid #0f0;
    display: block;
    svg {
      width: inherit;
      height: inherit;
      display: block;
    }
  }
  .tracklist-title {
    margin-top: 1px;
    margin-bottom: 2px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    flex: 0 0 100%;
    column-gap: 14px;
    color: rgba(255, 255, 250, 0.95);
    text-align: start;
    .tracklist-title__text {
      display: -webkit-box;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 13px;
      line-height: 1.2307692308;
      font-weight: 400;
      letter-spacing: 0em;
    }
  }
`

const Playlist = () => {
  const { episodes, showPlaylist } = usePlayer()
  if (!episodes || !episodes.length) return null
  return (
    <StPlaylist
      className={showPlaylist ? ' playlist-active' : 'playlist-hidden'}>
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
    <StEpisode
      onClick={() => handleClick()}
      role="listitem"
      title={`${prefix} | ${title}`}>
      <div className="tracklist-metadata">
        <div className="tracklist-mask">
          <div className="tracklist-info">
            <span className="tracklist-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22">
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill-rule="nonzero"
                    d="M2.36807692,21.8609375 C2.91885817,21.8609375 3.41104567,21.696875 4.07901442,21.3101562 L18.2118269,13.11875 C19.2899519,12.4859375 19.8524519,11.8882812 19.8524519,10.9507812 C19.8524519,10.0132812 19.2899519,9.415625 18.2118269,8.79453125 L4.07901442,0.59140625 C3.41104567,0.2046875 2.91885817,0.040625 2.36807692,0.040625 C1.24307692,0.040625 0.317295673,0.89609375 0.317295673,2.3375 L0.317295673,19.5640625 C0.317295673,21.0054687 1.24307692,21.8609375 2.36807692,21.8609375 Z"></path>
                </g>
              </svg>
            </span>
            <span>{prefix}</span>
            <span className="tracklist-separator" aria-hidden="true">
              {' '}
              · 
            </span>
            <time>{length}</time>
          </div>
        </div>
        <h3 className="tracklist-title">
          <span className="tracklist-title__text">{title}</span>
        </h3>
      </div>
    </StEpisode>
  )
}

export default Playlist
