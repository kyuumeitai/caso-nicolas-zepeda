module.exports = {
  siteMetadata: {
    title: `Sistemas de Justicia en la nueva Constitución chilena`,
    description: ``,
    author: `@latercera`,
    shareimg: `src/images/share.jpg`,
    fbappid: `1134891773353659`,
    domain: `https://interactivo.latercera.com`,
    url: 'https://interactivo.latercera.com/sistemas-de-justicia-nueva-constitucion',
    siteName: 'Interactivo La Tercera',
    author: `@latercera`,
    twitterHandle: `latercera`,
    hashtags: [`#reconstitucion`],
    siteUrl: 'https://interactivo.latercera.com',
  },
  pathPrefix: `/sistemas-de-justicia-nueva-constitucion`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`homemade apple`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        printRejected: true,
        purgeOnly: [`src/styles/globals.css`],
        // develop: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '736034173495383',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-80728886-38`, `UA-27744179-98`, `UA-27744179-43`],
        pluginConfig: {
          head: false,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `La Tercera`,
        short_name: `LT`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon-lt.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    `gatsby-plugin-offline`,
  ],
}
