module.exports = {
  siteMetadata: {
    title: `Habitación 106: El Juicio a Nicolás Zepeda`,
    description: `Habitación 106: el juicio a Nicolás Zepeda. Audiohistoria y especial multimedia de La Tercera sobre el caso de la desaparición de Narumi Kurosaki. Actualizado con el tercer juicio en Lyon, 2026.`,
    author: `@latercera`,
    shareimg: `src/images/share.jpg`,
    fbappid: `1134891773353659`,
    domain: `https://interactivo.latercera.com`,
    url: 'https://interactivo.latercera.com/habitacion-106-juicio-a-nicolas-zepeda/',
    siteName: 'Interactivo La Tercera',
    author: `@latercera`,
    twitterHandle: `latercera`,
    hashtags: [`#habitacion106`, `#casoNarumi`, `#NicolasZepeda`],
    siteUrl: 'https://interactivo.latercera.com',
  },
  pathPrefix: `/habitacion-106-juicio-a-nicolas-zepeda`,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-3PWBLKRS05`],
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
