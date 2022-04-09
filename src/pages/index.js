import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import Pipeline from '@/components/Featured/Justicia/Pipeline'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Sistemas de Justicia en la nueva Constitución chilena - Interactivos La Tercera" />
      <Pipeline />
    </Layout>
  )
}

export default IndexPage
