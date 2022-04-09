import React, { useState, useEffect } from 'react'
import Start from '@/components/Featured/Justicia/Start/'
import Questions from '@/components/Featured/Justicia/Questions/'
import styled from 'styled-components'

const StPipeline = styled.div``

const Pipeline = () => {
  const [start, setStart] = useState(false)

  return (
    <StPipeline>
      {start === false ? (
        <Start onCallback={() => setStart(true)} />
      ) : (
        <Questions />
      )}
    </StPipeline>
  )
}

export default Pipeline
