import { createGlobalStyle } from 'styled-components'

import {
  ActaDisplay,
  ActaDisplay2,
  ActaBook,
  ActaBook2,
  ActaBold,
  ActaBold2,
  ActaHeadlineBook,
  ActaHeadlineBook2,
  ActaHeadlineBookItalic,
  ActaHeadlineBookItalic2,
  InterRegular,
  InterRegular2,
  InterBold,
  InterBold2,
  InterExtraBold,
  InterExtraBold2,
} from './fonts'

export default createGlobalStyle`

  @font-face {
    font-family: 'Acta Display';
    src: url(${ActaDisplay2}) format('woff2'),
         url(${ActaDisplay}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Book';
    src: url(${ActaBook2}) format('woff2'),
          url(${ActaBook}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Book';
    src: url(${ActaBold2}) format('woff2'),
          url(${ActaBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Headline';
    src: url(${ActaHeadlineBook2}) format('woff2'),
          url(${ActaHeadlineBook}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Acta Headline';
    src: url(${ActaHeadlineBookItalic2}) format('woff2'),
          url(${ActaHeadlineBookItalic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular2}) format('woff2'),
          url(${InterRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBold2}) format('woff2'),
          url(${InterBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterExtraBold2}) format('woff2'),
          url(${InterExtraBold}) format('woff');
    font-weight: 800;
    font-style: normal;
  }

  .gatsby-image-wrapper {
  > img {
    filter: blur(30px);
  }
}
`
