<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h2>Components</h2>
      <router-link
        class="text--white btn ml-5"
        :to="`/components/${component.name}`"
        v-for="component in components"
        :key="component.name"
      >
        {{component.name}}
      </router-link>
      <h2 class="ml-10">Views</h2>
      <router-link
        class="text--white btn ml-5"
        :to="`/views/${view.name}`"
        v-for="view in views"
        :key="view.name"
      >
        {{view.name}}
      </router-link>
    </v-app-bar>
    <v-container grid-list-xl>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import components from './components';
import views from './views';

const allComponents = { ...views, ...components };

export default {
  name: 'App',
  components: allComponents,
  data: () => ({
    views: Object
      .entries(views)
      // eslint-disable-next-line no-unused-vars
      .map(([k, v]) => ({ name: v.name, component: v }))
      .filter((c) => c.name !== 'VueComponent'),
    components: Object
      .entries(components)
      // eslint-disable-next-line no-unused-vars
      .map(([k, v]) => ({ name: v.name, component: v }))
      .filter((c) => c.name !== 'VueComponent'),
  }),
};
</script>
<style scoped>
.v-application a {
  color: white;
}
</style>
