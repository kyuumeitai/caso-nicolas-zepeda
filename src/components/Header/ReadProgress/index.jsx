import React, { useState, useEffect } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { useGetResizer } from '@/contexts/Resizer'
import { useGetTheme } from '@/contexts/Theming'

import styled from 'styled-components'

const ProgressContainer = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  z-index: 1;
`

const Bar = styled(motion.div)`
  width: 100%;
  height: 4px;
  background-color: tomato;
`

const ReadProgress = () => {
  const viewportScroll = useViewportScroll()
  const [progress, setProgress] = useState(100000)
  const area = useGetResizer()
  const theme = useGetTheme()

  useEffect(() => {
    setTimeout(() => {
      setProgress(document.body.scrollHeight - window.innerHeight)
    }, 1000)
  }, [area])

  const position = useTransform(
    viewportScroll.scrollY,
    [0, progress],
    ['-100%', '0%'],
  )

  return (
    <ProgressContainer>
      <Bar
        style={{
          x: position,
          transition: 'all 0.5s ease-in-out',
        }}
      />
    </ProgressContainer>
  )
}

export default ReadProgress
