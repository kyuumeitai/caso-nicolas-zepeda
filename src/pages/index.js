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

export const Head = () => (
  <Seo
    structuredData={{
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: 'Habitación 106: El Juicio a Nicolás Zepeda',
      datePublished: '2022-04-12T00:00:00-04:00',
      dateModified: '2026-03-18T00:00:00-03:00',
      publisher: {
        '@type': 'Organization',
        name: 'La Tercera',
      },
    }}
  />
)

export default IndexPage
