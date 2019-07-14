import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import cors from 'cors'

//Vue.use(cors)
Vue.config.productionTip = false
Vue.prototype.$http=axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
