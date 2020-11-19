/* eslint-disable func-names */
module.exports = function (plop) {
  // helpers
  plop.setHelper('capitalize', (str) => str.charAt(0).toUpperCase() + str.slice(1));
  plop.setHelper('allCaps', (str) => str.toUpperCase());

  // generators
  plop.setGenerator('create component', {
    description: 'create',
    prompts:
    [
      {
        type: 'list',
        choices: ['component', 'view'],
        name: 'type',
        message: 'Type',
        default: 'component',
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'File name',
        default: 'Test',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Object Name',
        default: 'user',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stories/{{type}}s/{{fileName}}.stories.js',
        templateFile: 'templates/storybook-story.hbs',
      },
      {
        type: 'add',
        path: 'src/{{type}}s/{{fileName}}.vue',
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: 'tests/e2e/specs/{{type}}s/{{fileName}}.spec.js',
        templateFile: 'templates/e2e-test.hbs',
      },
      {
        type: 'add',
        path: 'test-data/{{fileName}}.json',
        templateFile: 'templates/test.json',
      },
    ],
  });
  plop.setGenerator('create unit test', {
    description: 'create',
    prompts:
    [
      {
        type: 'list',
        choices: ['component', 'view'],
        name: 'type',
        message: 'Type',
        default: 'component',
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'File name',
        default: 'Test',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Object Name',
        default: 'profile',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'tests/specs/{{type}}s/{{fileName}}.spec.js',
        templateFile: 'templates/unit-test.hbs',
      },
    ],
  });
  plop.setGenerator('store-module', {
    description: 'new store module',
    prompts:
    [
      {
        type: 'input',
        name: 'moduleName',
        message: 'Module name',
        default: '',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Base object name',
        default: 'firstName',
      },
      {
        type: 'input',
        name: 'endPoint',
        message: 'Api Endpoint',
        default: '/api/user',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/store/modules/{{moduleName}}/actions.js',
        templateFile: 'templates/vuex-actions.hbs',
      },
      {
        type: 'add',
        path: 'src/store/modules/{{moduleName}}/getters.js',
        templateFile: 'templates/vuex-getters.hbs',
      },
      {
        type: 'add',
        path: 'src/store/modules/{{moduleName}}/mutations.js',
        templateFile: 'templates/vuex-mutations.hbs',
      },
      {
        type: 'add',
        path: 'src/store/modules/{{moduleName}}/state.js',
        templateFile: 'templates/vuex-state.hbs',
      },
    ],
  });
};
