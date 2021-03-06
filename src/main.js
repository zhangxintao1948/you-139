
import Vue from 'vue'

import App from './App'
import router from './router/index'
import 'lib-flexible'



Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
//   router,
//   store
// })

new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
//.$mount('#app')