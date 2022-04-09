import React from 'react'
import styled from 'styled-components'

const StHero = styled.div`
  position: relative;
  padding-top: 0rem;
  text-align: center;
  min-height: 40vh;
  @media (orientation: portrait) {
    padding: 1rem;
    margin-top: 0rem;
  }
`

const Hero = () => {
  return (
    <StHero>
      <div className="content">
        <div className="relative max-w-screen-sm p-3 mx-auto md:max-w-screen-xl sm:p-8">
          <h1 className=" font-heading">
            Sistemas de justicia en la nueva{' '}
            <strong className="block text-6xl ">constitución</strong>
          </h1>
          <p>
            The path of the righteous man is beset on all sides by the
            inequities of the selfish and the tyranny of evil men. Blessed is he
            who, in the name of charity and good will Shepherds the weak through
            the valley of darkness.
          </p>
        </div>
      </div>
    </StHero>
  )
}

export default Hero
