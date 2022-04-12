import React, { useContext, useState, useEffect } from 'react'
import { usePlayer } from '@/contexts/Player'
import ReactHowler from 'react-howler'
import { Play, Pause, Backwards, Forwards } from './Buttons'

const Player = () => {
  const [url, setUrl] = useState(null)
  const [initialized, setInitialized] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const [muted, setMuted] = useState(false)

  const { episode, playerInBottom } = usePlayer()
  const { title, enclosure } = episode

  useEffect(() => {
    console.log('Init!')
  }, [])

  useEffect(() => {
    episode.enclosure && setUrl(episode.enclosure.url)
  }, [episode])

  if (!url) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 h-20 p-4 bg-white">
      <div>
        <div className="flex items-center justify-between">
          <ReactHowler src={[url]} playing={playing} />
          <button aria-label="Play" onClick={() => setPlaying(!playing)}>
            {playing ? <Pause /> : <Play />}
          </button>
          <button aria-label="Backwards" onClick={() => setPlaying(false)}>
            <Backwards />
          </button>
          <button aria-label="Forwards" onClick={() => setPlaying(false)}>
            <Forwards />
          </button>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Player
