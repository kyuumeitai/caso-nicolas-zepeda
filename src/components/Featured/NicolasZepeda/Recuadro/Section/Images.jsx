import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Images = ({ which }) => {
  const addZeroPrefix = number => {
    if (number < 10) {
      return `0${number}`
    }
    return number
  }

  const { allFile } = useStaticQuery(graphql`
    query GatonIllustrations {
      allFile(filter: { relativeDirectory: { eq: "imgs" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
              formats: [WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const selectImage = which => {
    const image = allFile.nodes.find(
      node => node.name === `${addZeroPrefix(which)}`,
    )
    return image
  }

  return (
    <div>
      <GatsbyImage alt="" image={getImage(selectImage(which))} />
    </div>
  )
}

export default Images
