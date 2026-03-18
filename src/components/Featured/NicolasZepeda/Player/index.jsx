import React, { useState, useEffect, useRef } from 'react'
import { usePlayer } from '@/contexts/Player'
import ReactHowler from 'react-howler'
import styled, { keyframes } from 'styled-components'
import durationFormatter from '@/utilities/formatter'
import { Play, Pause, Loading } from './Buttons'
import cover from '@/images/habitacion-106-podcast-lt-small.jpg'

import Playlist from './Playlist'

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Button = styled.button`
  background: white;
  border: 1px solid black;
  border-radius: 50%;
  color: black;
  &.loading {
    svg {
      animation: ${spinner} 1s infinite ease-in-out;
    }
  }
`

const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: saturate(400%) blur(10px);
  padding: 0.5rem;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31);
  border-radius: 3px 3px 0 0;
  color: white;
`

const Inner = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  column-gap: 20px;
  @media (max-width: 768px) {
    column-gap: 10px;
  }
`

const ProgressContainer = styled.div`
  width: 100%;
  height: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`

const ProgressInput = styled.input`
  width: 100%;
  appearance: none;
  background: transparent;
  cursor: pointer;
  height: 20px;

  &::-webkit-slider-runnable-track {
    height: 8px;
    border-radius: 999px;
    background: linear-gradient(
      to right,
      tomato 0%,
      tomato var(--track-progress),
      rgba(255, 255, 255, 0.2) var(--track-progress),
      rgba(255, 255, 255, 0.2) 100%
    );
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    margin-top: -4px;
    border: 2px solid white;
    border-radius: 999px;
    background-color: tomato;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  &::-moz-range-track {
    height: 8px;
    border-radius: 999px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  &::-moz-range-progress {
    height: 8px;
    border-radius: 999px;
    background-color: tomato;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-radius: 999px;
    background-color: tomato;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`

const Metadata = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.025em;
    margin-bottom: 4px;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  h4 {
    font-size: 0.875rem;
    line-height: 1;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`

const Controls = styled.div``

const Artwork = styled.div`
  justify-self: start;
  transition: width 200ms cubic-bezier(0.21, 0.11, 0.18, 1);
  .wrapper {
    position: relative;
    border-radius: 6px;
    svg {
      width: 100%;
      height: auto;
      display: block;
      border-radius: inherit;
      background-color: #ccc;
    }
    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      inset: 0px;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: inherit;
    }
  }
  .foreground {
    z-index: 1;
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 28px;
    display: block;
    transition: transform 0.15s ease 0s;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    inset: 0px;
    border-radius: inherit;
    pointer-events: none;
    object-fit: cover;
  }
`

const Buttons = styled.div``

const ProgressWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 36px 1fr 36px;
  align-items: center;

  small {
    font-size: 0.65rem;
    line-height: 1.7;
    display: block;
    margin-bottom: 4px;
    &:last-of-type {
      text-align: right;
    }
  }
`

const Player = () => {
  const [url, setUrl] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [duration, setDuration] = useState(0)
  const [seek, setSeek] = useState(0.0)
  const [playing, setPlaying] = useState(false)
  const [isSeeking, setIsSeeking] = useState(false)

  const playerRef = useRef()

  const {
    episode,
    episodes,
    setEpisode,
    activeEpisode,
    setActiveEpisode,
    setPlayerInBottom,
    setIsPlaying,
    playerInBottom,
    setGlobalPause,
    globalPause,
  } = usePlayer()
  const { title, podcastTitle, enclosure } = episode

  useEffect(() => {
    if (!episode.enclosure) return
    const newUrl = episode.enclosure.url

    if (newUrl !== url) {
      setLoaded(false)
      setSeek(0)
      setDuration(0)
    }
    setUrl(newUrl)
    setGlobalPause(false)
    setPlaying(true)
    setPlayerInBottom(true)
  }, [episode]) // eslint-disable-line react-hooks/exhaustive-deps

  const nextChapter = () => {
    if (activeEpisode + 1 < episodes.length) {
      const nextEpisode = episodes[activeEpisode + 1]
      const { audio, length, prefix, title } = nextEpisode
      const mockEpisode = {
        title: `${prefix}: ${title}`,
        podcastTitle: `Habitación 106: El juicio de Nicolás Zepeda`,
        enclosure: {
          url: `${audio ? audio : null}`,
          img: cover,
          length: length,
        },
      }
      setActiveEpisode(activeEpisode + 1)
      setEpisode(mockEpisode)
    } else {
      setPlaying(false)
    }
  }

  const handleOnLoad = () => {

    const soundDuration = playerRef.current?.duration()
    if (soundDuration) {
      setDuration(soundDuration)
    }
    setLoaded(true)
  }

  const handleOnPlay = () => {

    setPlaying(true)
    setIsPlaying(true)
    setGlobalPause(false)
  }

  const handleOnStop = () => {
    // Intentionally empty — stop fires during ReactHowler teardown
    // when switching tracks, which would kill the playing state we
    // just set for the next track. User pauses go through handleOnPause.

  }

  const handleOnPause = () => {

    setPlaying(false)
    setIsPlaying(false)
    setGlobalPause(true)
  }

  const onPlayError = () => {
    playerRef.once('unlock', () => {
      playerRef.play()
    })
  }

  const handleOnEnd = () => {

    nextChapter()
  }

  const handleSeekingChange = event => {
    const nextSeek = Number.parseFloat(event.target.value) || 0
    setSeek(nextSeek)
    playerRef.current?.seek(nextSeek)
  }

  useEffect(() => {
    let timer = null
    if (playing && !isSeeking) {
      const f = () => {
        setSeek(playerRef.current?.seek())
        timer = requestAnimationFrame(f)
      }
      timer = requestAnimationFrame(f)
      return () => cancelAnimationFrame(timer)
    }
    return () => cancelAnimationFrame(timer)
  }, [playing, isSeeking])

  useEffect(() => {
    if (globalPause && playing) {

      setPlaying(false)
    }
  }, [globalPause, playing])

  if (!url) return null
  if (!playerInBottom) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10">
      <Playlist />
      <Wrap>
        <Inner>
          <Artwork>
            <div className="wrapper">
              <svg viewBox="0 0 1 1" aria-hidden="true"></svg>
              <img className="foreground" src={enclosure.img} alt={title}></img>
            </div>
          </Artwork>
          <Controls>
            <Metadata>
              <h3>{title}</h3>
              <h4>{podcastTitle}</h4>
            </Metadata>
            <Buttons>
              <ProgressWrapper>
                <small className="time-passed">
                  {seek && durationFormatter(seek)}
                </small>
                <ProgressContainer>
                  <ProgressInput
                    aria-label="Seek playback position"
                    type="range"
                    step={0.1}
                    min={0}
                    max={duration || 0}
                    onChange={handleSeekingChange}
                    onPointerDown={() => {
                      setIsSeeking(true)
                    }}
                    onPointerUp={() => {
                      setIsSeeking(false)
                    }}
                    onPointerCancel={() => {
                      setIsSeeking(false)
                    }}
                    onKeyDown={() => {
                      setIsSeeking(true)
                    }}
                    onKeyUp={() => {
                      setIsSeeking(false)
                    }}
                    onBlur={() => {
                      setIsSeeking(false)
                    }}
                    style={{
                      '--track-progress': `${
                        duration > 0 ? (seek / duration) * 100 : 0
                      }%`,
                    }}
                    value={Number.isFinite(seek) ? seek : 0}
                  />
                </ProgressContainer>
                <small className="time-left">
                  {duration && durationFormatter(duration)}
                </small>
              </ProgressWrapper>
              <ReactHowler
                src={[url]}
                playing={playing}
                onLoad={() => handleOnLoad()}
                onPlay={() => handleOnPlay()}
                onEnd={() => handleOnEnd()}
                onStop={() => handleOnStop()}
                onPause={() => handleOnPause()}
                onPlayError={onPlayError}
                onLoadError={onPlayError}
                html5={true}
                loop={false}
                ref={playerRef}
              />
              <Button
                type="button"
                aria-label="Play"
                onClick={() => setPlaying(!playing)}
                className={loaded ? null : 'loading'}>
                {playing ? <>{loaded ? <Pause /> : <Loading />}</> : <Play />}
              </Button>
              {/* <Button aria-label="Backwards" onClick={() => setPlaying(false)}>
              <Backwards />
            </Button>
            <Button aria-label="Forwards" onClick={() => setPlaying(false)}>
              <Forwards />
            </Button> */}
            </Buttons>
          </Controls>
        </Inner>
      </Wrap>
    </div>
  )
}

export default Player
