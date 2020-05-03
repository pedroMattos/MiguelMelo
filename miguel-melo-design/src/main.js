import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from './firebase/index';
import './assets/scss/main.scss';

Vue.use(firebase);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
