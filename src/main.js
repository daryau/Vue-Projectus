import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/reset.css';
import './assets/scss/main.scss';
import './assets/scss/media.scss';

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
