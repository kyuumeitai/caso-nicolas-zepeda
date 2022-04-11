import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import Intro from '@/components/Featured/NicolasZepeda/Intro'
import Recuadro from '@/components/Featured/NicolasZepeda/Recuadro'
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Nicolás Zepeda - Interactivos La Tercera" />
      <Intro />
      <Recuadro />
    </Layout>
  )
}

export default IndexPage
