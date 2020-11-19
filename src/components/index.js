// https://vuex.vuejs.org/en/components.html
const requireModule = require.context('.', true, /\.vue$/);
const components = {};

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return;
  // Replace ./ and .vue
  const path = fileName.replace(/(\.\/|\.vue)/g, '');
  const [moduleName] = path.split('/');
  components[moduleName] = requireModule(fileName).default;
});
export default components;
