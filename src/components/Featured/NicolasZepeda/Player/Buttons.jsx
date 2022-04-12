import React from 'react'

const Play = ({ props }) => {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" {...props}>
      <path
        fill="currentColor"
        d="M22 44C9.85 44 0 34.15 0 22S9.85 0 22 0s22 9.85 22 22-9.85 22-22 22zm-5.333-31.333v18.666L31.333 22l-14.666-9.333z"></path>
    </svg>
  )
}

const Pause = ({ props }) => {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" {...props}>
      <path
        d="M19.333 12.667v18.666H14V12.667h5.333zm10.667 0v18.666h-5.333V12.667H30z"
        fill="currentColor"
        fillRule="evenodd"></path>
    </svg>
  )
}

const Backwards = ({ quantity = 15, ...rest }) => {
  return (
    <svg width="19" height="20" {...rest}>
      <path
        fill="currentColor"
        d="M5.067 4H14a5 5 0 015 5v3a5 5 0 01-5 5h-1.166v-2H14a3 3 0 003-3V9a3 3 0 00-3-3H5.067v4L0 5l5.067-5v4z"></path>
      <text
        fontFamily="HelveticaNeue-Bold, Helvetica Neue, sans-serif"
        fontSize="10"
        fontWeight="bold"
        letterSpacing=".125">
        <tspan x="0" y="19">
          {quantity}
        </tspan>
      </text>
    </svg>
  )
}

const Forwards = ({ quantity = 15, ...rest }) => {
  return (
    <svg width="19" height="20" {...rest}>
      <text
        fill="currentColor"
        fontFamily="HelveticaNeue-Bold, Helvetica Neue, sans-serif"
        fontSize="10"
        fontWeight="bold"
        letterSpacing=".125">
        <tspan x="7" y="19">
          {quantity}
        </tspan>
      </text>
      <path
        fill="currentColor"
        d="M13.933 4H5a5 5 0 00-5 5v3a5 5 0 005 5h1.166v-2H5a3 3 0 01-3-3V9a3 3 0 013-3h8.933v4L19 5l-5.067-5v4z"></path>
    </svg>
  )
}

export { Pause, Play, Backwards, Forwards }
