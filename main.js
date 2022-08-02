import App from './App'

import request from 'common/request.js'
Vue.prototype.$request = request;

// import axiosx from 'common/request.js'
// Vue.prototype.$axiosx = axiosx;


// uview-ui
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

import setUserInfo from "common/setUserInfo.js" //微信用户信息
Vue.prototype.$setUserInfo = setUserInfo

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif