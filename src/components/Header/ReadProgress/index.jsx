import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useGetResizer } from '@/contexts/Resizer'

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
  const { scrollY } = useScroll()
  const [progress, setProgress] = useState(100000)
  const area = useGetResizer()

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setProgress(document.body.scrollHeight - window.innerHeight)
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [area])

  const position = useTransform(scrollY, [0, progress], ['-100%', '0%'])

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
