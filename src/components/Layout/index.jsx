import React from 'react'

import { AnimatePresence } from 'framer-motion'
import Resizer from '@/contexts/Resizer'
import NavSize from '@/contexts/NavSize'
import Theme from '@/contexts/Theming'
import ModalProvider from '@/contexts/Modal'
import PlayerProvider from '@/contexts/Player'
import Player from '@/components/Featured/NicolasZepeda/Player'
import Credits from '@/components/UI/Credits'
import Modal from '@/components/UI/Modal'

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
            <PlayerProvider>
              <Header siteTitle={data.site.siteMetadata.title} />
              <ModalProvider>
                <AnimatePresence mode="wait" initial={false}>
                  <main key="main">{children}</main>
                </AnimatePresence>
                <Modal />
                <Player />
              </ModalProvider>
              <Credits />
              <Footer />
            </PlayerProvider>
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
