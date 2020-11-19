module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    'babel-plugin-istanbul',
  ],
};
