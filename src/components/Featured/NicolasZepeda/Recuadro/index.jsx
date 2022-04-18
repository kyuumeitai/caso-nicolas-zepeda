import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import { usePlayer } from '@/contexts/Player'

import {
  useViewportScroll,
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  animate,
} from 'framer-motion'

import Section from './Section'

const Container = styled.div`
  position: relative;
  z-index: 8;
  background-color: white;
  width: 100%;
  min-height: 100vh;
  color: black;
  transform: translate3d(0, 0, 0);
`

const Content = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
`

const SectionWrap = styled(motion.div)``

const Recuadro = ({ chapters }) => {
  const { setEpisodes, activeEpisode } = usePlayer()
  useEffect(() => {
    console.log('chapters', chapters)
    setEpisodes(chapters)
  }, [chapters])

  const refs = useRef(
    [...new Array(chapters.length)].map(() => React.createRef()),
  )

  useEffect(() => {
    console.log('active', activeEpisode)
    if (activeEpisode || activeEpisode === 0) {
      console.log(refs.current[activeEpisode])
      refs.current[activeEpisode].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [activeEpisode])

  return (
    <Container>
      <Content className="container mx-auto ">
        {
          <AnimatePresence>
            {chapters.map((chapter, index) => {
              return (
                <SectionWrap key={index} ref={refs.current[index]}>
                  <Section index={index} chapindex={index} {...chapter} />
                </SectionWrap>
              )
            })}
          </AnimatePresence>
        }
      </Content>
    </Container>
  )
}

export default Recuadro
