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

import Section from './Section'

const Container = styled.div`
  position: relative;
  z-index: 3;
  background-color: white;
  width: 100%;
  min-height: 100vh;
  color: black;
`

const Content = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
`

const SectionWrap = styled(motion.div)``

const Recuadro = ({ chapters }) => {
  return (
    <Container>
      <Content className="container mx-auto ">
        {
          <AnimatePresence>
            {chapters.map((chapter, index) => (
              <SectionWrap key={index}>
                <Section index={index} chapindex={index} {...chapter} />
              </SectionWrap>
            ))}
          </AnimatePresence>
        }
      </Content>
    </Container>
  )
}

export default Recuadro
