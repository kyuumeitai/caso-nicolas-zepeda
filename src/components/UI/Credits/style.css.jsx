import styled from 'styled-components'

const StCredits = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: tomato;
  color: black;
  position: relative;
  z-index: 2;
  .creditsWrapper {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
  }
  h2 {
    line-height: 1;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
  }
  strong {
    font-weight: bold;
  }
`

export { StCredits }
