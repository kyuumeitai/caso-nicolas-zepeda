import React, { useEffect, useRef, useState } from 'react'
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
  overflow-y: auto;
  overflow-x: hidden;
`

const Modal = styled(motion.div)`
  background-color: white;
  box-shadow: -0.5em 0 0.5em 0 rgba(0, 0, 0, 0.2);
  max-width: 1020px;
  @media (max-width: 1020px) {
    max-width: 96%;
  }
`

const Close = styled(motion.button)`
  border-radius: 50%;
  border: 1px solid black;
  position: relative;
  transition: border-color 400ms ease;
  width: 50px;
  height: 50px;
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

const Meta = styled.div`
  text-transform: uppercase;
`

const BodyContent = styled.div`
  // lo que sea que va en el body
`

const ContentContainer = styled.div``

let modalAnimation = {
  enter: {
    x: '0%',
    transition: {
      type: 'tween',
      ease: [0.5, 1, 0.89, 1],
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '100%',
    transition: {
      type: 'tween',
      ease: [0.5, 1, 0.89, 1],
      duration: 0.5,
      when: 'afterChildren',
    },
  },
}

const ModalComponent = ({ children }) => {
  const { active, setActive, contentKey, setContentKey } = useModal()
  const ref = useRef()
  const [activeContent, setActiveContent] = useState({})

  useEffect(() => {
    if (active) {
      disablePageScroll(ref.current)
    } else {
      enablePageScroll(ref.current)
    }
  }, [active])

  useEffect(() => {
    const current = ref.current
    return () => {
      enablePageScroll(current)
    }
  }, [])

  return (
    <AnimatePresence exitBeforeEnter>
      {active ? (
        <ModalContainer
          ref={ref}
          initial="exit"
          animate="enter"
          exit="exit"
          onClick={e => {
            if (e.target === ref.current) {
              setActive(false)
            }
          }}>
          <Modal variants={modalAnimation}>
            <ContentContainer>
              <Close onClick={() => setActive(false)} />
              <BodyContent>{children}</BodyContent>
            </ContentContainer>
          </Modal>
        </ModalContainer>
      ) : null}
    </AnimatePresence>
  )
}

export default ModalComponent
