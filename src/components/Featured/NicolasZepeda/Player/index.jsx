import React, { useState, useEffect, useRef } from 'react'
import { usePlayer } from '@/contexts/Player'
import ReactHowler from 'react-howler'
import styled, { keyframes } from 'styled-components'
import durationFormatter from '@/utilities/formatter'
import { Play, Pause, Backwards, Forwards, Loading } from './Buttons'

import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from '@chakra-ui/react'

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
`

const ProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  margin: 10px 0;
  .chakra-slider {
    height: 6px;
    background-color: #444;
  }
  .chakra-slider__track {
    height: 6px;
  }
  .chakra-slider__filled-track {
    height: 6px;
    background-color: #ccc;
  }
`

const Metadata = styled.div``

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
  const [isActuallyPlaying, setIsActuallyPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const [isSeeking, setIsSeeking] = useState(false)

  const playerRef = useRef()

  const { episode, setPlayerInBottom, playerInBottom } = usePlayer()
  const { title, podcastTitle, enclosure } = episode

  useEffect(() => {
    episode.enclosure && setUrl(episode.enclosure.url)
    setPlaying(true)
    setPlayerInBottom(true)
  }, [episode])

  const handleOnLoad = () => {
    const soundDuration = playerRef.current?.duration()
    if (soundDuration) {
      setDuration(soundDuration)
    }
    setLoaded(true)
  }

  const handleOnPlay = bla => {
    console.log('on play', bla)
    setPlaying(true)
    setIsActuallyPlaying(true)
  }

  const handleOnStop = () => {
    console.log('click stop')
    setPaused(true)
    setIsActuallyPlaying(false)
  }

  const handleOnPause = () => {
    console.log('click pause')
    setPaused(true)
    setIsActuallyPlaying(false)
  }

  const onPlayError = () => {
    playerRef.once('unlock', () => {
      playerRef.play()
    })
  }

  const handleOnEnd = () => {}

  const handleSeekingChange = e => {
    setSeek(parseFloat(`${e[0]}`))
    playerRef.current?.seek(parseFloat(`${e[0]}`))
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

  if (!url) return null
  if (!playerInBottom) return null

  return (
    <Wrap className="fixed bottom-0 left-0 right-0 z-10">
      <Inner>
        <Artwork>
          <div className="wrapper">
            <svg viewBox="0 0 1 1" aria-hidden="true"></svg>
            <img className="foreground" src={enclosure.img} alt={title}></img>
          </div>
        </Artwork>
        <Controls>
          <Metadata>
            <h3 className="text-xl font-bold tracking-tight ">{title}</h3>
            <h4 className="text-sm">{podcastTitle}</h4>
          </Metadata>
          <Buttons>
            <ProgressWrapper>
              <small className="time-passed">
                {seek && durationFormatter(seek)}
              </small>
              <ProgressContainer>
                <RangeSlider
                  aria-label={['min', 'max']}
                  step={0.1}
                  min={0}
                  max={duration ? duration.toFixed() : 0}
                  onChange={handleSeekingChange}
                  value={[seek]}
                  onChangeStart={() => {
                    setIsSeeking(true)
                  }}
                  onChangeEnd={() => {
                    setIsSeeking(false)
                  }}>
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack id="rangeSlider"></RangeSliderFilledTrack>
                  </RangeSliderTrack>
                </RangeSlider>
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
              ref={playerRef}
            />
            <Button
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
  )
}

export default Player
