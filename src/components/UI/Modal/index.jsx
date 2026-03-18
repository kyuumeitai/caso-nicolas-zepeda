import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useModal } from '@/contexts/Modal'
import {
  disablePageScroll,
  enablePageScroll,
} from 'scroll-lock/dist/scroll-lock'
import { AnimatePresence, motion } from 'framer-motion'
import { darken } from 'polished'

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  background-color: rgba(0, 0, 0, 0.6);
`

const Modal = styled(motion.div)`
  position: relative;
  background-color: white;
  box-shadow: -0.5em 0 0.5em 0 rgba(0, 0, 0, 0.2);
  max-width: 1020px;
  height: 90vh;
  margin-top: 5vh;
  margin-bottom: 5vh;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.5em;
  will-change: transform, opacity;
  @media (max-width: 1020px) {
    max-width: 96%;
  }
`

const Close = styled(motion.button)`
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  transition: border-color 400ms ease;
  width: 30px;
  height: 30px;
  top: 10px;
  right: 8px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 20px;
    background-color: black;
    top: 50%;
    left: 50%;
    transform-origin: 50% 50%;
    transition: background-color 400ms ease;
  }
  &:before {
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }
  &:after {
    transform: translateX(-50%) translateY(-50%) rotate(-45deg);
  }
  &:hover,
  &:active {
    border-color: tomato;
    &:before,
    &:after {
      background-color: tomato;
    }
  }
  &:focus {
    outline: none;
    border-color: ${darken(0.1, 'tomato')};
    &:before,
    &:after {
      background-color: ${darken(0.1, 'tomato')};
    }
  }
`

const BodyContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`

const ContentContainer = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  top: 70px;
  bottom: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`

const TitleContainer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  right: 50px;
  overflow: auto;
`

const overlayAnimation = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeIn', delay: 0.1 },
  },
}

const modalAnimation = {
  initial: { x: '100%', opacity: 0 },
  enter: {
    x: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 300,
      mass: 0.8,
    },
  },
  exit: {
    x: '60%',
    opacity: 0,
    transition: {
      type: 'tween',
      ease: [0.4, 0, 1, 1],
      duration: 0.25,
    },
  },
}

const ModalComponent = () => {
  const { active, setActive, content, title } = useModal()
  const scrollRef = useRef()

  useEffect(() => {
    if (active) {
      disablePageScroll(scrollRef.current)
    } else {
      enablePageScroll(scrollRef.current)
    }
  }, [active])

  useEffect(() => {
    const current = scrollRef.current
    return () => {
      enablePageScroll(current)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {active ? (
        <ModalContainer
          variants={overlayAnimation}
          initial="initial"
          animate="enter"
          exit="exit"
          onClick={e => {
            if (e.target === e.currentTarget) {
              setActive(false)
            }
          }}>
          <Modal
            variants={modalAnimation}
            initial="initial"
            animate="enter"
            exit="exit">
            <Close onClick={() => setActive(false)} />
            <TitleContainer
              dangerouslySetInnerHTML={{ __html: title }}></TitleContainer>
            <ContentContainer>
              <BodyContent ref={scrollRef}>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
              </BodyContent>
            </ContentContainer>
          </Modal>
        </ModalContainer>
      ) : null}
    </AnimatePresence>
  )
}

export default ModalComponent
