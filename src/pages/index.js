import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import Intro from '@/components/Featured/NicolasZepeda/Intro'
import Recuadro from '@/components/Featured/NicolasZepeda/Recuadro'
import content from '@/content/'

const IndexPage = () => {
  const { title, description, chapters } = content
  return (
    <Layout>
      <SEO title={`${title} - Interactivo La Tercera`} />
      <Intro title={title} description={description} />
      <Recuadro chapters={chapters} />
    </Layout>
  )
}

export default IndexPage
