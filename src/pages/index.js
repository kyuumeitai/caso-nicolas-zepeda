import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import Intro from '@/components/Featured/NicolasZepeda/Intro'
import Recuadro from '@/components/Featured/NicolasZepeda/Recuadro'
import content from '@/content/'

const IndexPage = () => {
  const { title, description, chapters } = content
  return (
    <Layout>
      <Intro title={title} description={description} />
      <Recuadro chapters={chapters} />
    </Layout>
  )
}

export const Head = () => <Seo />

export default IndexPage
