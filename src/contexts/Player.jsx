import React, { createContext, useContext, useState } from 'react'

const PlayerContext = createContext()

export const { Provider, Consumer } = PlayerContext

export function usePlayer() {
  return useContext(PlayerContext)
}

export const PlayerProvider = props => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [playerInBottom, setPlayerInBottom] = useState(false)
  const [episode, setEpisode] = useState({})
  return (
    <Provider
      value={{
        isPlaying,
        setIsPlaying,
        isMuted,
        setIsMuted,
        playerInBottom,
        setPlayerInBottom,
        episode,
        setEpisode,
      }}
      {...props}
    />
  )
}

export default PlayerProvider
