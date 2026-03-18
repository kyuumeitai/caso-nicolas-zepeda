import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { usePlayer } from '@/contexts/Player'

import { motion } from 'framer-motion'

import Section from './Section'

const Container = styled.div`
  position: relative;
  z-index: 8;
  background-color: white;
  width: 100%;
  min-height: 100vh;
  color: black;
  transform: translateZ(0);
`

const Content = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
`

const SectionWrap = styled.div``

const Recuadro = ({ chapters }) => {
  const { setEpisodes, activeEpisode } = usePlayer()
  useEffect(() => {
    setEpisodes(chapters)
  }, [chapters, setEpisodes])

  const refs = useRef(
    [...new Array(chapters.length)].map(() => React.createRef()),
  )

  useEffect(() => {
    if (activeEpisode || activeEpisode === 0) {
      refs.current[activeEpisode].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [activeEpisode])

  return (
    <Container>
      <Content className="container mx-auto ">
        {chapters.map((chapter, index) => {
          return (
            <SectionWrap key={index} ref={refs.current[index]}>
              <Section index={index} chapindex={index} {...chapter} />
            </SectionWrap>
          )
        })}
        <div className="max-w-2xl px-4 py-20 mx-auto text-center">
          <h2 className="mb-4 font-actaDisplay text-balance">Disclaimer</h2>
          <p className="font-sans leading-relaxed text-pretty text-gray-700">
            Este especial multimedia fue publicado originalmente en abril de
            2022, durante el primer juicio a Nicolás Zepeda en Besanzón,
            Francia. Desde entonces, el caso ha tenido nuevos desarrollos: en
            2023 se ratificó la condena en apelación y en 2025 la Corte de
            Casación Francesa anuló dicha sentencia por irregularidades
            procesales. Actualmente, en marzo de 2026, se lleva a cabo un tercer
            juicio en Lyon cuyo veredicto se espera para fines de mes. Los
            contenidos de los episodios originales reflejan la información
            disponible al momento de su producción y no han sido modificados. La
            introducción ha sido actualizada para dar contexto sobre el estado
            actual del proceso.
          </p>
          <p className="mt-4 font-sans text-xs text-gray-400">
            Última actualización: 18 de marzo de 2026
          </p>
        </div>
      </Content>
    </Container>
  )
}

export default Recuadro
