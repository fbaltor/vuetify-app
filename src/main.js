import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

let vm = new Vue({
  vuetify,
  render: (h) => h(App),
});

vm.$mount('#app');
