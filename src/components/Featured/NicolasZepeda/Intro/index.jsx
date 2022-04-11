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
import { useTheme } from '@/contexts/Theming'

import IntroSvg from './Intro'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  z-index: 1;
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

const RadialGradient = styled(motion.div)`
  position: fixed;
  z-index: 2;
  height: 400vh;
  top: -100vh;
  left: 0vw;
  right: 0vw;
  pointer-events: none;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.0127407) 10%,
    rgba(0, 0, 0, 0.0485926) 15%,
    rgba(0, 0, 0, 0.104) 20%,
    rgba(0, 0, 0, 0.175407) 25%,
    rgba(0, 0, 0, 0.259259) 35%,
    rgba(0, 0, 0, 0.352) 40%,
    rgba(0, 0, 0, 0.450074) 43%,
    rgba(0, 0, 0, 0.549926) 46%,
    rgba(0, 0, 0, 0.648) 48%,
    rgba(0, 0, 0, 0.740741) 50%,
    rgba(0, 0, 0, 0.824593) 52%,
    rgba(0, 0, 0, 0.896) 54%,
    rgba(0, 0, 0, 0.951407) 56%,
    rgba(0, 0, 0, 0.987259) 58%,
    #000000 100%
  );
  will-change: transform;
`

const ContentWrapper = styled.div`
  min-width: 700px;
  margin-top: 200px;
  @media (max-width: 700px) {
    min-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  display: inline-block;
  svg {
    width: 100%;
    height: auto;
    fill: black;
  }
`

const VectorWrap = styled(motion.div)`
  height: calc(100vh + 100px);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 3;
`

const ZepedaSvg = styled(motion.div)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  bottom: 100px;
  left: 0;
  right: 0;
  text-align: center;
  width: 600px;
  @media (max-width: 700px) {
    width: 230px;
  }
  svg {
    margin-left: auto;
    margin-right: auto;
  }
`

const Intro = () => {
  const area = useGetResizer()
  const containerRef = useRef()
  const zepedaRef = useRef()
  const [refPosition, setRefPosition] = useState(0)
  const [windowHeight, setWindowHeight] = useState(768)
  const { scrollY } = useViewportScroll()

  const contentScrollY = useTransform(
    scrollY,
    [0, 2.3 * windowHeight],
    [0, -2.3 * windowHeight],
  )

  const contentAnimationY = useMotionValue(-40)

  const contentProgressY = useTransform(
    [scrollY, contentScrollY, contentAnimationY],
    ([scrollY, scrollProgressY, animationProgressY]) => {
      if (scrollY === 0) {
        return animationProgressY
      } else {
        return scrollProgressY
      }
    },
  )

  const gradientProgressScale = useTransform(
    scrollY,
    [0, windowHeight * 3],
    [5, 1],
    { ease: easing.outQuad },
  )

  const gradientProgressY = useTransform(
    scrollY,
    [0, windowHeight * 3],
    [0, -windowHeight * 0.5],
    { ease: easing.outQuad },
  )

  const fallingZepedaScrollY = useTransform(scrollY, [0, 0], [0, 0], {
    ease: easing.outQuad,
  })

  const fallingZepedaAnimationY = useMotionValue(-600)

  const fallingZepedaProgressY = useTransform(
    [scrollY, fallingZepedaScrollY, fallingZepedaAnimationY],
    ([scrollY, scrollProgressY, animationProgressY]) => {
      if (scrollY === 0) {
        return animationProgressY
      } else {
        return scrollProgressY
      }
    },
  )

  const fallingZepedaOpacity = useTransform(
    scrollY,
    [0, windowHeight * 2, windowHeight * 4.5],
    [1, 1, 0],
    { ease: easing.outQuad },
  )

  const setSizes = () => {
    const position = containerRef.current?.getBoundingClientRect()
    setRefPosition(position)
  }

  useEffect(() => {
    setSizes()
  }, [area])

  const height = 3 // 3 paños

  return (
    <>
      <AnimatePresence>
        <RadialGradient
          key="gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.7 }}
          style={{
            scale: gradientProgressScale,
            y: gradientProgressY,
          }}
        />
        <VectorWrap>
          <ZepedaSvg
            ref={zepedaRef}
            style={{
              opacity: fallingZepedaOpacity,
            }}>
            <IntroSvg />
          </ZepedaSvg>
        </VectorWrap>
        <Container ref={containerRef} style={{ height: `${height * 100}vh` }}>
          <Screen>
            <Content
              style={{
                y: contentProgressY,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: false }}>
              <ContentWrapper>
                <h1>Nicolás Zepeda háganme un título plis</h1>
                <small>intro</small>
              </ContentWrapper>
            </Content>
          </Screen>
        </Container>
      </AnimatePresence>
    </>
  )
}

export default Intro
