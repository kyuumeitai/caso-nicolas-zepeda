import React, { useRef, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { easing } from '@/utilities/math'
import {
  useViewportScroll,
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  animate,
} from 'framer-motion'

import content from '@/content'

import { useGetResizer } from '@/contexts/Resizer'

import Marco from './Marco'
import Section from './Section'

const Container = styled.div`
  position: relative;
  z-index: 3;
  background-color: white;
  width: 100%;
  min-height: 100vh;
  color: black;
`

const Screen = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  width: 100vw;
  left: 0;
  text-align: center;
  align-items: end;
  justify-content: center;
`

const Content = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
`

const MarcoWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #ccc;
`

const MarcoBg = styled(motion.div)`
  position: absolute;
  height: 400vh;
  width: 300vw;
  will-change: transform;
  svg {
    width: 100%;
  }
`

const SectionWrap = styled(motion.div)`
  min-height: 200vh;
`

const Recuadro = ({ chapters }) => {
  const area = useGetResizer()
  const containerRef = useRef()
  const recuadroRef = useRef()
  const [windowHeight, setWindowHeight] = useState(768)
  const { scrollY } = useViewportScroll()
  const recuadroXenY = useTransform(
    scrollY,
    [
      0,
      windowHeight,
      windowHeight * 2,
      windowHeight * 3,
      windowHeight * 4,
      windowHeight * 5,
      windowHeight * 6,
      windowHeight * 7,
      windowHeight * 8,
      windowHeight * 9,
      windowHeight * 10,
      windowHeight * 11,
    ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    { ease: easing.outQuad },
  )

  const recuadroYenY = useTransform(
    scrollY,
    [0, windowHeight * 10],
    [0.01, 1],
    {
      ease: easing.outQuad,
    },
  )

  const height = chapters.length // numero de secciones = numero de paños

  return (
    <Container ref={containerRef} style={{ height: `${height * 100 * 2}vh` }}>
      <Content className="container mx-auto ">
        {
          <AnimatePresence>
            {chapters.map((chapter, index) => (
              <SectionWrap key={index}>
                <Section
                  index={index}
                  containerRef={containerRef}
                  recuadroRef={recuadroRef}
                  {...chapter}
                />
              </SectionWrap>
            ))}
          </AnimatePresence>
        }
      </Content>
      {/* 
      <MarcoWrap>
        <MarcoBg
          key="marco"
          ref={recuadroRef}
          style={{
            x: recuadroXenY,
            y: recuadroYenY,
            // scale: recuadroScaleEnY,
          }}>
          <Marco />
        </MarcoBg>
      </MarcoWrap> */}
    </Container>
  )
}

export default Recuadro
