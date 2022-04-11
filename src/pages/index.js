import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import Intro from '@/components/Featured/NicolasZepeda/Intro'
import Recuadro from '@/components/Featured/NicolasZepeda/Recuadro'
import content from '@/content/'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title={` - Interactivo La Tercera`} />
      <Intro title={'hola'} />
      <Recuadro />
    </Layout>
  )
}

export default IndexPage
