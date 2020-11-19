const path = require('path');

const vueSrc = './src';
const storybookSrc = './.storybook';
const testData = './test-data';
module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'test') {
      config.merge({
        target: 'node',
        devtool: 'eval',
      });
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '~src': path.resolve(__dirname, vueSrc),
        '~storybook': path.resolve(__dirname, storybookSrc),
        '~testData': path.resolve(__dirname, testData),
      },
      extensions: ['.js', '.vue', '.json'],
    },
  },
};
