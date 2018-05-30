// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Hellow from '../components/HelloWorld.vue'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#root',
  components: { Hellow },
  template: '<Hellow/>'
})
