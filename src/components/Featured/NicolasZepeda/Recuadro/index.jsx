import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { usePlayer } from '@/contexts/Player'

import { motion } from 'framer-motion'

import Section from './Section'

const Container = styled.div`
  position: relative;
  z-index: 8;
  background-color: white;
  width: 100%;
  min-height: 100vh;
  color: black;
  transform: translateZ(0);
`

const Content = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
`

const SectionWrap = styled.div``

const Recuadro = ({ chapters }) => {
  const { setEpisodes, activeEpisode } = usePlayer()
  useEffect(() => {
    setEpisodes(chapters)
  }, [chapters, setEpisodes])

  const refs = useRef(
    [...new Array(chapters.length)].map(() => React.createRef()),
  )

  useEffect(() => {
    if (activeEpisode || activeEpisode === 0) {
      refs.current[activeEpisode].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [activeEpisode])

  return (
    <Container>
      <Content className="container mx-auto ">
        {chapters.map((chapter, index) => {
          return (
            <SectionWrap key={index} ref={refs.current[index]}>
              <Section index={index} chapindex={index} {...chapter} />
            </SectionWrap>
          )
        })}
      </Content>
    </Container>
  )
}

export default Recuadro
