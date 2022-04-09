import React from 'react'
import Button from '@/components/Common/Button'
import styled from 'styled-components'
import Balance from './Balance'

const StStart = styled.div`
  position: relative;
  padding-top: 0rem;
  text-align: center;
  min-height: 40vh;
  @media (orientation: portrait) {
    padding: 1rem;
    margin-top: 0rem;
  }
`

const StBalance = styled(Balance)`
  max-width: 300px;
  margin: 0 auto;
`

const Start = ({ onCallback }) => {
  return (
    <StStart>
      <div className="content">
        <div className="relative max-w-screen-sm p-3 mx-auto md:max-w-screen-xl sm:p-8">
          <StBalance />
          <h1 className=" font-heading">
            Así sería el futuro{' '}
            <strong className="block text-6xl ">Poder Judicial</strong>
          </h1>
          <p>
            La<strong> Convención Constitucional</strong> está a un paso de
            despachar al borrador de la nueva Constitución{' '}
            <strong>
              los últimos artículos que regularán lo que hoy conocemos como el
              Poder Judicial
            </strong>
            . Esta es la estructura y el diseño de cómo operarán los tribunales.
            El sistema quedó diseñado de forma distinta al actual ya que quedará
            regulado por el principio de <strong>pluralismo jurídico</strong>.
            Es decir, <strong>existirán dos sistemas</strong> -uno para pueblos
            indígenas y otro para personas no indígenas-{' '}
            <strong>
              que convivirán en paralelo y en un plano de igualdad
            </strong>
            .
          </p>
          <Button theme="light" onCallback={() => onCallback()}>
            Empezar
          </Button>
        </div>
      </div>
    </StStart>
  )
}

export default Start
