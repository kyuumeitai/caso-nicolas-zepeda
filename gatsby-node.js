const path = require(`path`)

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
