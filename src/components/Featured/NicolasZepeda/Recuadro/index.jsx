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

import { useGetResizer } from '@/contexts/Resizer'

import Marco from './Marco'

const Container = styled.div`
  position: relative;
  z-index: 3;
  background-color: black;
  width: 100%;
  min-height: 100vh;
  color: white;
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
`

const MarcoBg = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  will-change: transform;
  background-color: white;
  border: 3px solid #f0f;
  height: 400vh;
  width: 300vw;
  top: -100vh;
  svg {
    width: 100%;
  }
`

const Recuadro = () => {
  const area = useGetResizer()
  const containerRef = useRef()
  const recuadroRef = useRef()
  const [windowHeight, setWindowHeight] = useState(768)
  const { scrollY } = useViewportScroll()

  const recuadroProgressY = useTransform(
    scrollY,
    [0, windowHeight * 11],
    [0, -windowHeight * 0.5],
    { ease: easing.outQuad },
  )

  const recuadroProgressScale = useTransform(
    scrollY,
    [0, windowHeight * 10],
    [0.01, 1],
    {
      ease: easing.outQuad,
    },
  )

  const height = 6 // 6 paños

  return (
    <Container>
      <MarcoBg
        key="marco"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={recuadroRef}
        transition={{ duration: 1.7 }}
        style={{ scale: recuadroProgressScale }}>
        <Marco />
      </MarcoBg>
    </Container>
  )
}

export default Recuadro
