import React from 'react'
import styled from 'styled-components'
import banner from '@/images/liptonbanner.jpg.jpg'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: #ccc;
  padding-top: 5rem;
`

const Banner = styled.div`
  height: 250px;
  width: 300px;
  background: white;
`

const Ad = () => (
  <Wrapper>
    <Banner>
      <a href="https://www.youtube.com/watch?v=QYyG_8A3a58" target="_blank">
        <img src={banner} alt="Lipton" />
      </a>
    </Banner>
  </Wrapper>
)

export default Ad
