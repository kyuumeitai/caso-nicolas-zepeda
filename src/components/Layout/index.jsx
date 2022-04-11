import React from 'react'

import { AnimatePresence } from 'framer-motion'
import Resizer from '@/contexts/Resizer'
import NavSize from '@/contexts/NavSize'
import Theme from '@/contexts/Theming'

import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import GlobalStyle from '@/styles/global.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavSize>
        <Theme>
          <Resizer>
            <Header siteTitle={data.site.siteMetadata.title} />
            <AnimatePresence exitBeforeEnter initial={false}>
              <main>{children}</main>
            </AnimatePresence>
            <Footer />
          </Resizer>
        </Theme>
      </NavSize>
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
