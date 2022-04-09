/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import defaultShareImg from '@/images/share.jpg'

function SEO({
  description,
  lang,
  meta,
  title,
  img,
  slug,
  structuredData,
  type = 'website',
  user,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            author
            domain
            siteName
          }
        }
      }
    `,
  )

  const striphtml = str => str.replace(/<(?:.|\n)*?>/gm, '')

  const metaDescription = striphtml(
    description ? description : site.siteMetadata.description,
  )
  const metaImg = img ? img : defaultShareImg
  const postslug = slug ? slug : ''
  const fullurl = `${site.siteMetadata.url}${postslug}${
    postslug.endsWith('/') ? '' : '/'
  }`

  return (
    <Helmet
      titleTemplate={
        title
          ? `%s - ${site.siteMetadata.title} - ${site.siteMetadata.siteName}`
          : `${site.siteMetadata.title}  - ${site.siteMetadata.siteName}`
      }>
      <html lang={lang} />
      <title>{title ? title : ''} </title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullurl} />
      <meta
        property="og:title"
        content={title ? title : site.siteMetadata.title}
      />

      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullurl} />
      <meta
        property="og:image"
        content={`${site.siteMetadata.domain}${metaImg}`}
      />
      <meta property="twitter:card" content={`summary_large_image`} />
      <meta property="twitter:creator" content={site.siteMetadata.author} />
      <meta
        property="twitter:title"
        content={title ? title : site.siteMetadata.title}
      />
      <meta property="twitter:description" content={metaDescription} />
      <meta
        property="twitter:image"
        content={`${site.siteMetadata.domain}${metaImg}`}
      />

      {type === 'profile' && user && user.first_name && (
        <meta property="profile:first_name" content={user.first_name} />
      )}

      {type === 'profile' && user && user.last_name && (
        <meta property="profile:last_name" content={user.last_name} />
      )}

      {type === 'profile' && user && user.sexo && (
        <meta
          property="profile:gender"
          content={user.sexo === 'Mujer' ? 'female' : 'male'}
        />
      )}

      {type === 'profile' && user && (
        <meta property="profile:username" content={user.nombre} />
      )}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
