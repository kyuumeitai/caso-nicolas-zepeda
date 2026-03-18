import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
  </Layout>
)

export const Head = () => <Seo title="404: Not found" />

export default NotFoundPage
