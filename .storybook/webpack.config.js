const path = require('path')

module.exports = async ({ config }) => {
  config.resolve.alias['~storybook'] = path.resolve(__dirname)
  config.resolve.alias['~src'] = path.resolve(__dirname, '../src')
  config.resolve.alias['~testData'] = path.resolve(__dirname, '../test-data')
  config.module.rules.push({
    resourceQuery: /blockType=story/,
    loader: 'vue-storybook',
  })

  config.module.rules.push({
    test: /\.s(a|c)ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })

  return config
}
