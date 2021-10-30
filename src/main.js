import Vue from 'vue';
import App from './App.vue';
import 'windi.css';
import router from './router';
import * as axios from 'axios';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';

Vue.config.productionTip = false;

function tokenInterceptor() {
  axios.interceptors.request.use(
    (config) => {
      if (Vue.prototype.$keycloak.authenticated) {
        config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

const { VUE_APP_CLIENT_ID } = process.env;

Vue.use(VueKeyCloak, {
  config: {
    realm: 'tigerthon',
    url: 'http://auth.tigerthon-bot.com/auth',
    clientId: VUE_APP_CLIENT_ID,
  },
  onReady: () => {
    tokenInterceptor();
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      render: (h) => h(App),
    });
  },
});
