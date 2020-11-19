import Vue from 'vue';
import axios from 'axios';
import VueFriendlyIframe from 'vue-friendly-iframe';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';

Vue.use(VueFriendlyIframe);
// Setup API
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_APIKEY;
axios.defaults.baseURL = process.env.VUE_APP_APIURL;

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
