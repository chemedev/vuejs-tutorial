/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

// Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = `#${Math.random().toString().slice(2, 8)}`;
  },
});

Vue.config.productionTip = false;

// eslint-disable-next-line import/prefer-default-export
export const bus = new Vue();

new Vue({
  render: (h) => h(App),
}).$mount('#app');
