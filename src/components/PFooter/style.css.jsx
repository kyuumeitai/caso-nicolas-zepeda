import styled from 'styled-components'

const StPFooter = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background-color: black;
  color: white;
  h2 {
    font-family: 'Acta Display', serif;
  }
  &:hover {
    > a {
      button {
        background-color: black;
        color: white;
      }
    }
  }
  > a {
    color: inherit;
    text-decoration: none;
    display: block;
    margin-left: auto;
    margin-right: auto;

    button {
      transition: all 0.3s;
      text-transform: uppercase;
      padding: 1rem 1rem;
      display: block;
      background-color: white;
      color: black;
      border: 1px solid black;
      text-decoration: none;
      border-radius: 4px;
      display: inline-block;
      padding: 0.75rem 1rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: bold;
      margin-top: 2rem;
      svg {
        margin-right: 0.2rem;
      }
    }
  }
`

export { StPFooter }
