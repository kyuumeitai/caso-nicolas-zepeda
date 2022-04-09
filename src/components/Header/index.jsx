import { Link } from 'gatsby'
import React from 'react'
import { LaTercera } from '@labcon/copesa-logos'

import styled from 'styled-components'

const StyledHeader = styled.header`
  backdrop-filter: saturate(200%) blur(5px);
  background-color: rgba(255, 255, 255, 0.8);
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader className="fixed top-0 left-0 right-0 z-20 items-center justify-center border-gray-300 border-solid shadow-md">
    <div className="container h-16 px-2 mx-auto sm:px-4 lg:px-20">
      <div className="p-4">
        <a
          className="flex items-center justify-end h-10"
          href="https://www.latercera.com/?utm_source=interactivo&utm_medium=web&utm_campaign=logo-latercera&utm_content=justicia-constitucion">
          <LaTercera red="black" width="200" height="20" />
        </a>
      </div>
    </div>
  </StyledHeader>
)

export default Header
