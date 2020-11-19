import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import components from '../components';
import views from '../views';

Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const createRoute = (items, type) => Object
  .entries(items)
  // eslint-disable-next-line no-unused-vars
  .map(([k, v]) => ({ name: v.name, component: v }))
  .filter((c) => c.name !== 'VueComponent')
  .map((view) => ({
    path: `/${type}/${view.name}`,
    name: `${type}-${view.name}`,
    component: view.component,
  }));

const viewRoutes = createRoute(views, 'views');
const componentRoutes = createRoute(components, 'components');

routes = routes.concat(componentRoutes, viewRoutes);
const router = new VueRouter({
  routes,
});

export default router;
