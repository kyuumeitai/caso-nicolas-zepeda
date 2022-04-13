import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'gatsby'
import { LaTercera } from '@labcon/copesa-logos'
import ReadProgress from './ReadProgress'
import styled from 'styled-components'

import { useGetResizer } from '@/contexts/Resizer'
import { useNavSize } from '@/contexts/NavSize'
import { useGetTheme } from '@/contexts/Theming'

import Share from '@/components/Share'

const StyledHeader = styled.header`
  backdrop-filter: saturate(200%) blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
`

const Columns = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 280px 1fr 280px;
  a {
    display: block;
  }
  @media (max-width: 768px) {
    gap: 2rem;
    grid-template-columns: 120px 1px 1fr;
  }
`

const Header = ({ siteTitle }) => {
  const ref = useRef()
  const area = useGetResizer()
  const { setHeight } = useNavSize()
  const theme = useGetTheme()
  const scrollPos = useRef(0)

  const [windowHeight, setWindowHeight] = useState(768)

  useEffect(() => {
    let rect = ref.current.getBoundingClientRect()
    setHeight(rect.height)
  }, [area, setHeight])

  useEffect(() => {
    const handleResize = () => {
      updateWindowHeight()
    }

    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight)
    }

    updateWindowHeight()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <StyledHeader
      ref={ref}
      className="fixed top-0 left-0 right-0 z-20 items-center justify-center border-gray-300 border-solid shadow-md">
      <ReadProgress />
      <div className="container h-16 px-2 mx-auto sm:px-4 lg:px-20">
        <Columns className="h-16">
          <a
            className="block h-4 sm:h-6"
            href="https://www.latercera.com/?utm_source=interactivo&utm_medium=web&utm_campaign=logo-latercera&utm_content=habitacion-106">
            <LaTercera red="black" width="200" className="h-4 sm:h-6" />
          </a>
          <span></span>
          <div>
            <Share
              url={`https://interactivo.latercera.com/habitacion-106-juicio-a-nicolas-zepeda/`}
              title={`Habitación 106: El Juicio a Nicolás Zepeda - Audiohistorias La Tercera`}
              twitterhandle="latercera"
              hashtags={['AudioHistorias', 'Habitacion106', 'NicolasZepeda']}
            />
          </div>
        </Columns>
      </div>
    </StyledHeader>
  )
}

export default Header
