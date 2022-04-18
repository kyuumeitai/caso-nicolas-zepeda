import React from 'react'
import { usePlayer } from '@/contexts/Player'
import styled from 'styled-components'
import cover from '@/images/habitacion-106-podcast-lt.jpg'

const StPlaylist = styled.div`
  /* background-color: rgba(255, 255, 255, 0.1); */

  &.playlist-active {
  }
  &.playlist-hidden {
  }

  .chapters {
    height: 100%;
  }

  .playlist-header {
    position: absolute;
    bottom: 100px;
    right: 10px;
    .playlist-header__button {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 2px 4px;
      margin-bottom: 5px;
      border-radius: 6px;
      transition: background-color 0.2s ease-in-out;

      .playlist-header__button__inner {
        display: flex;
        align-items: center;
      }
      .playlist-header__button__text {
        font-size: 13px;
      }
      .playlist-header__button__icon {
        margin-left: 5px;
        position: relative;
        bottom: -3px;
        transition: transform 0.2s ease-in-out;
      }
    }
  }
  .chapters {
    transition: height 0.2s ease-in-out;
  }
  &.playlist-active {
    .chapters {
      overflow-x: hidden;
      overflow-y: auto;
      height: calc(100vh - 64px - 140px - 20px);
    }
    .playlist-header__button {
      background-color: tomato;
      .playlist-header__button__icon {
        bottom: 3px;
        transform: rotate(180deg);
      }
    }
  }
  &.playlist-hidden {
    .chapters {
      overflow: hidden;
      height: 0;
    }
  }
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
      display: flex;
      align-items: center;
    }
  }
  .tracklist-icon {
    margin-right: 7px;
    width: 8px;
    height: 8px;
    display: block;
    svg {
      width: inherit;
      height: inherit;
      display: block;
      fill: rgba(255, 255, 250, 0.95);
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
      line-height: 1.1;
      font-weight: 400;
      letter-spacing: 0em;
    }
  }
  .tracklist-separator {
    margin-left: 4px;
    margin-right: 4px;
  }
`

const Playlist = () => {
  const { episodes, showPlaylist, setShowPlaylist } = usePlayer()
  if (!episodes || !episodes.length) return null
  return (
    <StPlaylist
      className={showPlaylist ? ' playlist-active' : 'playlist-hidden'}>
      <div className="chapters">
        {episodes.map((episode, index) => (
          <Episode key={index} episode={episode} />
        ))}
      </div>
      <div className="playlist-header">
        <button
          className="playlist-header__button"
          onClick={() => setShowPlaylist(!showPlaylist)}>
          <div className="playlist-header__button__inner">
            <span className="playlist-header__button__text">capítulos</span>
            <span className="playlist-header__button__icon" aria-hidden="true">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 1.5L6.5 6.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 1.5L6.5 6.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </button>
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
                <g fillRule="evenodd">
                  <path
                    fillRule="nonzero"
                    d="M2.36807692,21.8609375 C2.91885817,21.8609375 3.41104567,21.696875 4.07901442,21.3101562 L18.2118269,13.11875 C19.2899519,12.4859375 19.8524519,11.8882812 19.8524519,10.9507812 C19.8524519,10.0132812 19.2899519,9.415625 18.2118269,8.79453125 L4.07901442,0.59140625 C3.41104567,0.2046875 2.91885817,0.040625 2.36807692,0.040625 C1.24307692,0.040625 0.317295673,0.89609375 0.317295673,2.3375 L0.317295673,19.5640625 C0.317295673,21.0054687 1.24307692,21.8609375 2.36807692,21.8609375 Z"></path>
                </g>
              </svg>
            </span>
            <span>{prefix}</span>
            <span className="tracklist-separator" aria-hidden="true">
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
