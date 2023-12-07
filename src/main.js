import Vue from 'vue'
import App from './App.vue'
import router from '@/routes';
import VueAwesomeSwiper from 'vue-awesome-swiper';


Vue.config.productionTip = false

import '@/components/index';
import '@/pages/index';
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
