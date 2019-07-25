import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import cors from 'cors'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'animate.css';
Vue.use(Vuesax)


//Vue.use(cors)
Vue.config.productionTip = false
Vue.prototype.$http=axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
