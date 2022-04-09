import React from 'react'
import Button from '@/components/Common/Button'
import { StPFooter } from './style.css'

const PFooter = () => (
  <StPFooter>
    <a
      href="https://suscripciondigital.latercera.com/?utm_medium=especialeslt&utm_source=sistemas-de-justicia-nueva-constitucion&utm_content=footer"
      target="_blank"
      rel="noopener noreferrer"
      className="block p-3 mx-auto text-center md:max-w-screen-sm sm:p-8">
      <h2 className="mb-6 text-6xl leading-none">Más que un diario</h2>
      <p>
        El periodismo de calidad es mucho más que un formato. No cabe en una
        hoja de papel. Y así como debe ser capaz de informar y analizar las 24
        horas, también busca entretener, emocionar y servir. Sé un suscriptor
        digital y forma parte de esta forma de entender del periodismo.
      </p>
      <Button>Suscríbete</Button>
    </a>
  </StPFooter>
)

export default PFooter
