// https://vuex.vuejs.org/en/views.html
const requireModule = require.context('.', true, /\.vue$/);
const views = {};

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return;
  // Replace ./ and .vue
  const path = fileName.replace(/(\.\/|\.vue)/g, '');
  const [moduleName] = path.split('/');
  views[moduleName] = requireModule(fileName).default;
});
export default views;
