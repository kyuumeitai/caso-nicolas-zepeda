import React from 'react'
import { Container, StLogo, StFooterContent } from './style.css'
import PFooter from '@/components/PFooter'
import { LaTercera, Interactivo } from '@labcon/copesa-logos'

const Footer = () => (
  <Container>
    <PFooter />
    <StFooterContent>
      <a
        href="https://www.latercera.com/?utm_medium=especiales&utm_source=sistemas-de-justicia-nueva-constitucion&utm_content=footer"
        className="slotLab"
        target="_blank"
        rel="noopener noreferrer">
        <StLogo>
          <Interactivo schema="light" className="w-48 mx-auto mb-4" />
          <LaTercera schema="light" className="w-48 mx-auto mb-4 " />
        </StLogo>
      </a>
    </StFooterContent>
  </Container>
)

export default Footer
