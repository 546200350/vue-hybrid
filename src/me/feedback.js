// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'amfe-flexible';
import Vue from 'vue'
import FeedBack from './component/FeedBack.vue';
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#root',
  components: {FeedBack},
  template: '<FeedBack/>'
});
