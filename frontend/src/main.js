import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.css'
import axios from 'axios'

// axios.defaults.baseURL = "http://192.168.0.153:8000/api/"
axios.defaults.baseURL = "http://127.0.0.1:8000/api/"
// axios.defaults.baseURL = "http://iw.nyanbox.top/api/"

Vue.config.productionTip = false
Vue.use(ElementUI);

//axios 请求拦截器
// axios.interceptors.request.use(config => {
// 	config.headers.Authorization = window.sessionStorage.getItem('token');
// 	return config;
// })

Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
