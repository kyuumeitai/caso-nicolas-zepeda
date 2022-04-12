import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ProgressContainer = styled.div`
  width: 100%;
  height: 10px;
  margin: 10px 0;
  input {
    display: block;
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    cursor: pointer;
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 10px + var(--ratio) * (100% - 10px));
    &:focus {
      outline: none;
    }
    &:hover {
      &::-webkit-slider-runnable-track {
        background: #888;
        background: linear-gradient(tomato, tomato) 0 / var(--sx) 100% no-repeat,
          #888;
      }
    }
    &:active {
      &::-webkit-slider-runnable-track {
        background: #888;
        background: linear-gradient(tomato, tomato) 0 / var(--sx) 100% no-repeat,
          #f5f5f5;
      }
    }
    &::-webkit-slider-runnable-track {
      height: 6px;
      border-radius: 5px;
      background: #efefef;
      border: none;
      box-shadow: none;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: none;
      box-shadow: 0 0 0 1px #fff, 0 0 0 3px tomato;
      background: tomato;
      margin-top: -2px;
      &:hover {
        background: tomato;
      }
      &:active {
        background: black;
      }
    }
  }
`

const ProgressBar = ({
  duration,
  seek,
  onSeek,
  onChangeStart,
  onChangeEnd,
}) => {
  const [localSeek, setLocalSeek] = useState(0)

  useEffect(() => {
    if (seek) {
      setLocalSeek(seek)
    }
  }, [seek])

  return (
    <ProgressContainer>
      <input
        type="range"
        min="0"
        max={duration ? duration.toFixed(2) : 0}
        step="0.01"
        value={localSeek}
        onChange={e => onSeek(e)}
        // onChangeStart={() => onChangeStart()}
        // onChangeEnd={() => onChangeEnd()}
      />
    </ProgressContainer>
  )
}

export default ProgressBar
